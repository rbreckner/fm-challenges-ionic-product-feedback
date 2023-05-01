import {Injectable} from '@angular/core';
import {createStore} from '@ngneat/elf';
import {
  addEntities, getEntitiesCount,
  selectAllEntities,
  selectManyByPredicate,
  upsertEntities,
  withEntities
} from '@ngneat/elf-entities';
import {localStorageStrategy, persistState} from '@ngneat/elf-persist-state';
import {map, Observable, switchMap} from 'rxjs';
import {v4 as uuidv4} from 'uuid';

import {Comment} from './comment';
import {commentsMock, currentUserMock} from '../mock-data';
import {UserRepository} from '../user/user.repository';
import {User} from '../user/user';


const COMMENTS_STORE_NAME = 'App-Comments';

const store = createStore(
  {name: COMMENTS_STORE_NAME},
  withEntities<Comment>()
)

persistState(
  store,
  {
    key: COMMENTS_STORE_NAME,
    storage: localStorageStrategy
  }
);

@Injectable({
  providedIn: 'root'
})
export class CommentRepository {
  constructor(private userRepo: UserRepository) {
    if (store.query(getEntitiesCount()) === 0) {
      this.fillWithMockData()
    }
  }

  fillWithMockData() {
    store.update(upsertEntities(commentsMock))
  }

  add(productRequestId: string, content: string, replyToCommentId?: string) {
    const newComment: Comment = {
      id: uuidv4(),
      productRequestId,
      content,
      createdById: currentUserMock.id,
      replyToCommentId
    };

    store.update(addEntities(newComment))
  }

  selectAll() {
    return store.pipe(selectAllEntities());
  }

  selectCommentsForProductRequest(productRequestId: string): Observable<Comment[]> {
    function placeReply(root: Comment[], reply: Comment, users: User[]) {
      const repliedToComment = root.find(x => x.id === reply.replyToCommentId)
      if (repliedToComment) {
        if (!repliedToComment.replies) {
          repliedToComment.replies = [];
        }
        reply.replyToUser = users.find(x => x.id === repliedToComment.createdById);
        repliedToComment.replies.push(reply);
        return true;
      } else {
        root.forEach(comment => {
          return comment.replies ? placeReply(comment.replies, reply, users) : false;
        })
        return false;
      }
    }

    return store.pipe(
      selectManyByPredicate(x => x.productRequestId === productRequestId),
      switchMap(comments => {

        return this.userRepo.getUsers(comments.map(x => x.createdById)).pipe(
          map(users => {
            comments = comments.map(x => ({
              ...x,
              createdBy: users.find(y => y.id === x.createdById)
            }));
            const mappedComments: Comment[] = [];
            comments.forEach(comment => {
              if (!comment.replyToCommentId) {
                mappedComments.push({...comment});
              } else {
                placeReply(mappedComments, {...comment}, users);
              }
            })
            return mappedComments;
          })
        )
      })
    )
  }
}

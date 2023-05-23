import {Injectable} from '@angular/core';
import {createStore} from '@ngneat/elf';
import {
  addEntities, deleteEntities, getEntitiesCount, getEntity,
  selectAllEntities,
  selectEntity,
  selectManyByPredicate,
  updateEntities, upsertEntities,
  withEntities
} from '@ngneat/elf-entities';
import {map, Observable, combineLatest} from 'rxjs';
import {v4 as uuidv4} from 'uuid';

import {ProductRequest} from './product-request';
import {Status, statuses} from '../model/statuses';
import {CommentRepository} from '../comment/comment.repository';
import {localStorageStrategy, persistState} from '@ngneat/elf-persist-state';
import {productRequestsMock} from '../mock-data';

const PRODUCT_REQUESTS_STORE_NAME = 'App-ProductRequests';

const store = createStore(
  {name: PRODUCT_REQUESTS_STORE_NAME},
  withEntities<ProductRequest>()
)

persistState(
  store,
  {
    key: PRODUCT_REQUESTS_STORE_NAME,
    storage: localStorageStrategy
  }
);

@Injectable({
  providedIn: 'root'
})
export class ProductRequestRepository {

  constructor(private commentRepo: CommentRepository) {
    if(store.query(getEntitiesCount()) === 0) {
      this.fillWithMockData()
    }
  }

  fillWithMockData() {
    store.update(upsertEntities(productRequestsMock))
  }

  add(productRequest: ProductRequest) {
    productRequest.id = uuidv4();
    productRequest.upVotes = 0;
    store.update(addEntities(productRequest));
  }

  update(productRequestId: string, productRequest: ProductRequest) {
    store.update(updateEntities(productRequestId, productRequest));
  }


  delete(productRequestId: string) {
    store.update(deleteEntities(productRequestId));
  }

  selectSuggestions(): Observable<ProductRequest[]> {
    return combineLatest([
      store.pipe(selectManyByPredicate(x => x.status === 'Suggestion')),
      this.commentRepo.selectAll()
    ]).pipe(map(([suggestions, comments]) => {
      return suggestions.map(suggestion => ({
        ...suggestion,
        comments: comments.filter(comment => comment.productRequestId === suggestion.id)
      }))
    }));
  }

  selectMappedStatuses(): Observable<Status[]> {
    return store.pipe(
      selectAllEntities(),
      map(x => {
        return statuses.map(status => ({
          ...status,
          productRequests: x.filter(
            productRequest => productRequest.status === status.name
          )
        }))
      })
    )
  }

  selectProductRequestDetail(productRequestId: string): Observable<ProductRequest> {
    return combineLatest([
      store.pipe(selectEntity(productRequestId)),
      this.commentRepo.selectCommentsForProductRequest(productRequestId)
    ]).pipe(map(([productRequest, comments]) => {
      return {
        ...productRequest,
        comments
      }
    })) as Observable<ProductRequest>; //todo: is there a better way?
  }

  getProductRequest(productRequestId: string) {
    return store.query(getEntity(productRequestId));
  }

  toggleUpVote(productRequestId: string) {
    store.update(updateEntities(
      productRequestId,
      (productRequest) => ({
        ...productRequest,
        upVotes: productRequest.userHasUpVoted ? productRequest.upVotes - 1 : productRequest.upVotes + 1,
        userHasUpVoted: !productRequest.userHasUpVoted
      })
    ));
  }
}

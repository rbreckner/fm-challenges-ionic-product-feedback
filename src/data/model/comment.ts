import {User} from './user';

export interface Comment {
  id: number
  content: string
  user: User,
  replies?: Comment[];
  replyToCommentId?: number;
  replyToUserName?: string;
}

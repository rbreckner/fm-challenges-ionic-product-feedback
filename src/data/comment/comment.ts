import {User} from '../user/user';

export interface Comment {
  id: string;
  productRequestId: string;
  content: string;
  createdById: string;

  createdBy?: User;

  replyIds?: string[];
  replies?: Comment[];

  replyToCommentId?: string;
  replyToUser?: User;
}

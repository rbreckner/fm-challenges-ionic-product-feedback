import {Comment} from '../comment/comment';

export interface ProductRequest {
  id: string;
  title: string;
  category: string;
  upVotes: number;
  userHasUpVoted: boolean;
  status: string;
  description: string;

  commentIds?: string[];
  comments?: Comment[];
}

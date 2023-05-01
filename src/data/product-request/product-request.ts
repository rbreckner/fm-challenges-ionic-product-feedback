import {Comment} from '../comment/comment';

export interface ProductRequest {
  id: number
  title: string
  category: string
  upvotes: number
  status: string
  description: string

  comments: Comment[]
}

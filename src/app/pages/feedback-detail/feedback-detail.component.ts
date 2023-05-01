import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, switchMap, } from 'rxjs';

import {ProductRequest} from '../../../data/product-request/product-request';
import {ProductRequestRepository} from '../../../data/product-request/product-request.repository';
import {CommentRepository} from '../../../data/comment/comment.repository';


@Component({
  selector: 'app-feedback-detail',
  templateUrl: './feedback-detail.component.html',
  styleUrls: ['./feedback-detail.component.scss']
})
export class FeedbackDetailComponent implements OnInit {
  productRequest$: Observable<ProductRequest> = this.route.params.pipe(
    switchMap(params =>
      this.productRequestRepo.selectProductRequestDetail(params['id']))
  )

  replyTo: string | null = null;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private productRequestRepo: ProductRequestRepository,
              private commentRepo: CommentRepository) {
  }

  ngOnInit() {
  }

  addComment(productRequestId: string, content: string, replyToCommentId?: string) {
    this.commentRepo.add(
      productRequestId,
      content,
      replyToCommentId
    );
    if (replyToCommentId) {
      this.replyTo = null;
    }
  }
}

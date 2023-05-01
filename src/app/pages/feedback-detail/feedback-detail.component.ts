import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductRequest} from '../../../data/model/product-request';
import {ProductRequestService} from '../../../data/product-request.service';

@Component({
  selector: 'app-feedback-detail',
  templateUrl: './feedback-detail.component.html',
  styleUrls: ['./feedback-detail.component.scss']
})
export class FeedbackDetailComponent implements OnInit {
  productRequest: ProductRequest | undefined;
  commentAmount = 0;

  replyTo: number | null = null;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private productRequestService: ProductRequestService) {
    const productRequestId = route.snapshot.params['id'];
    if (productRequestId) {
      this.productRequest = this.productRequestService.productRequest(Number(productRequestId));
      this.commentAmount = this.productRequest?.comments?.length || 0;
    } else {
      //todo not found probably better!
      this.router.navigate(['/']);
    }

    (window as any)['feedbackdetail'] = this;
  }

  ngOnInit() {
  }

  addComment(content: string) {
    console.log('addComment not implemented', content);
  }

  addReply(content: string) {
    console.log('addReply not implemented', content);
    this.replyTo = null;
  }
}

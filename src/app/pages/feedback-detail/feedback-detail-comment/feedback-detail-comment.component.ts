import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../../../data/model/comment';

@Component({
  selector: 'app-feedback-detail-comment',
  templateUrl: './feedback-detail-comment.component.html',
  styleUrls: ['./feedback-detail-comment.component.scss'],
})
export class FeedbackDetailCommentComponent  implements OnInit {
  @Input() comment: Comment | undefined;

  constructor() { }

  ngOnInit() {}

}

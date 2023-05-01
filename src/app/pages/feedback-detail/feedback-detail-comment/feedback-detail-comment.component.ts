import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Comment} from '../../../../data/model/comment';

@Component({
  selector: 'app-feedback-detail-comment',
  templateUrl: './feedback-detail-comment.component.html',
  styleUrls: ['./feedback-detail-comment.component.scss']
})
export class FeedbackDetailCommentComponent implements OnInit {
  @Input() comment: Comment | undefined;
  @Input() replyTo: number | null = null;
  @Output() replyClicked = new EventEmitter<number>();
  @Output() addComment = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

}

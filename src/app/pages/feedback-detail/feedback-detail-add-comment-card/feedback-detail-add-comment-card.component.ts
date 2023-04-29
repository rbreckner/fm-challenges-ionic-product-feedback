import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-feedback-detail-add-comment-card',
  templateUrl: './feedback-detail-add-comment-card.component.html',
  styleUrls: ['./feedback-detail-add-comment-card.component.scss']
})
export class FeedbackDetailAddCommentCardComponent {
  newComment = '';

  get newCommentCharsLeft() {
    return 250 - this.newComment.length;
  }

  @Output() addComment = new EventEmitter<string>();
}

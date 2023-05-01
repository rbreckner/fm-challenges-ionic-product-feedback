import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-feedback-detail-add-reply',
  templateUrl: './feedback-detail-add-reply.component.html',
  styleUrls: ['./feedback-detail-add-reply.component.scss'],
})
export class FeedbackDetailAddReplyComponent  implements OnInit {
  newReply: string = '';

  get newCommentCharsLeft() {
    return 250 - this.newReply.length;
  }

  @Output() addComment = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

}

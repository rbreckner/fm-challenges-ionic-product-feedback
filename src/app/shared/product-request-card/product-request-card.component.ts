import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductRequest} from '../../../data/product-request/product-request';
import {statuses} from '../../../data/model/statuses';
import {ProductRequestRepository} from '../../../data/product-request/product-request.repository';

@Component({
  selector: 'app-product-request-card',
  templateUrl: './product-request-card.component.html',
  styleUrls: ['./product-request-card.component.scss'],
})
export class ProductRequestCardComponent {
  @Input() productRequest!: ProductRequest;
  @Input() showStatus = false;

  get commentAmount() {
    return this.productRequest?.comments?.length;
  }

  // todo: i dont like this....
  get statusColor() {
    return statuses.find(x => x.name === this.productRequest?.status)?.color;
  }

  constructor(private productRequestRepo: ProductRequestRepository) { }

  toggleUpVote(event: Event) {
    //todo: why do i need both here?!
    event.preventDefault();
    event.stopPropagation();
    this.productRequestRepo.toggleUpVote(this.productRequest.id);
  }

}

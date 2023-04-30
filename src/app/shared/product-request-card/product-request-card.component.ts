import {Component, Input, OnInit} from '@angular/core';
import {ProductRequest} from '../../../data/model/product-request';
import {statuses} from '../../../data/model/statuses';

@Component({
  selector: 'app-product-request-card',
  templateUrl: './product-request-card.component.html',
  styleUrls: ['./product-request-card.component.scss'],
})
export class ProductRequestCardComponent implements OnInit {
  @Input() productRequest: ProductRequest | undefined;
  @Input() showStatus = false;

  get commentAmount() {
    return this.productRequest?.comments.length;
  }

  // todo: i dont like this....
  get statusColor() {
    return statuses.find(x => x.name.toLowerCase() === this.productRequest?.status)?.color;
  }

  constructor() { }

  ngOnInit() {}

}

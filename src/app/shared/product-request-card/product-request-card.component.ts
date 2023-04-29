import {Component, Input, OnInit} from '@angular/core';
import {ProductRequest} from '../../../data/model/product-request';

@Component({
  selector: 'app-product-request-card',
  templateUrl: './product-request-card.component.html',
  styleUrls: ['./product-request-card.component.scss'],
})
export class ProductRequestCardComponent implements OnInit {
  @Input() productRequest: ProductRequest | undefined;

  get commentAmount() {
    return this.productRequest?.comments.length;
  }

  constructor() { }

  ngOnInit() {}

}

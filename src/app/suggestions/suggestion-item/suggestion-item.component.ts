import {Component, Input, OnInit} from '@angular/core';
import {ProductRequest} from '../../../data/model/product-request';

@Component({
  selector: 'app-suggestion-item',
  templateUrl: './suggestion-item.component.html',
  styleUrls: ['./suggestion-item.component.scss'],
})
export class SuggestionItemComponent  implements OnInit {
  @Input() productRequest: ProductRequest | undefined;

  constructor() { }

  ngOnInit() {}

}

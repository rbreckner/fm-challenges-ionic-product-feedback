import {Component, OnInit} from '@angular/core';
import {ProductRequest} from '../../data/model/product-request';
import {productRequestsMock} from '../../data/product-requests-mock';
import {SuggestionSortOptions} from './suggestion-sort-options';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {
  productRequests: ProductRequest[] = productRequestsMock;

  sortby: SuggestionSortOptions = SuggestionSortOptions.MostUpvotes;

  get sortedProductRequests() {
    return this.productRequests.sort((a, b) => {
      if (this.sortby === SuggestionSortOptions.MostUpvotes) {
        return b.upvotes - a.upvotes;
      } else if (this.sortby === SuggestionSortOptions.LeastUpvotes) {
        return a.upvotes - b.upvotes;
      } else if (this.sortby === SuggestionSortOptions.MostComments) {
        return (b.comments ? b.comments.length : 0) - (a.comments ? a.comments.length : 0);
      } else if (this.sortby === SuggestionSortOptions.LeastComments) {
        return (a.comments ? a.comments.length : 0) - (b.comments ? b.comments.length : 0);
      }
      return 0;
    })
  }

  constructor() {
  }

  ngOnInit() {
  }

}

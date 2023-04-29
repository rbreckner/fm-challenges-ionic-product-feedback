import {Component, OnInit} from '@angular/core';
import {ProductRequest} from '../../../data/model/product-request';
import {productRequestsMock} from '../../../data/product-requests-mock';
import {SuggestionSortOptions} from './suggestion-sort-options';
import {MenuController} from '@ionic/angular';
import {ProductRequestService} from '../../../data/product-request.service';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {
  menuOpen = false;

  categories = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature']

  productRequests: ProductRequest[];

  sortby: SuggestionSortOptions = SuggestionSortOptions.MostUpvotes;
  selectedCategory = 'All';

  get filteredSuggestions() {
    return this.productRequests
      .filter(x => x.status === 'suggestion')
      .filter(x => this.selectedCategory === 'All'
        || this.selectedCategory.toLowerCase() === x.category.toLowerCase())
      .sort((a, b) => {
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

  get statuses() {
   return [
      {
        name: 'Planned',
        color: '#F49F85',
        amount: this.productRequests.filter(x => x.status === 'planned').length
      },
      {
        name: 'In-Progress',
        color: '#AD1FEA',
        amount: this.productRequests.filter(x => x.status === 'in-progress').length
      },
      {
        name: 'Live',
        color: '#62BCFA',
        amount: this.productRequests.filter(x => x.status === 'live').length
      },
    ]
  }

  constructor(private productRequestService: ProductRequestService) {
    this.productRequests = this.productRequestService.productRequests;
  }

  ngOnInit() {
  }
}

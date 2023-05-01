import {Component, HostListener, OnInit} from '@angular/core';
import {ProductRequest} from '../../../data/product-request/product-request';
import {SuggestionSortOptions} from './suggestion-sort-options';
import {ProductRequestService} from '../../../data/product-request.service';
import {Status, statuses} from '../../../data/model/statuses';
import {Platform} from '@ionic/angular';
import {ProductRequestRepository} from '../../../data/product-request/product-request.repository';
import {BehaviorSubject, combineLatest, map} from 'rxjs';

const DESKTOP_BREAKPOINT = 992

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {
  displayIsDesktop = false;

  menuOpen = false;

  categories = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature']

  // productRequests: ProductRequest[];
  //
  // // sortby: SuggestionSortOptions = SuggestionSortOptions.MostUpvotes;
  // // selectedCategory = 'All';

  sortBy$ = new BehaviorSubject(SuggestionSortOptions.MostUpvotes);
  categoryFilter$ = new BehaviorSubject('All')

  suggestions$ = combineLatest([
    this.productRequestRepo.getSuggestions(),
    this.categoryFilter$,
    this.sortBy$
  ]).pipe(map(([productRequests, categoryFilter, sortBy]) => {
    return productRequests
      .filter(x => categoryFilter === 'All' || categoryFilter === x.category)
      .sort((a, b) => {
        if (sortBy === SuggestionSortOptions.MostUpvotes) {
          return b.upvotes - a.upvotes;
        } else if (sortBy === SuggestionSortOptions.LeastUpvotes) {
          return a.upvotes - b.upvotes;
        } else if (sortBy === SuggestionSortOptions.MostComments) {
          return (b.comments ? b.comments.length : 0) - (a.comments ? a.comments.length : 0);
        } else if (sortBy === SuggestionSortOptions.LeastComments) {
          return (a.comments ? a.comments.length : 0) - (b.comments ? b.comments.length : 0);
        }
        return 0;
      })
  }))

  mappedStatuses$ = this.productRequestRepo.getMappedStatuses();

  constructor(private platform: Platform,
              private productRequestRepo: ProductRequestRepository) {
    this.platform.ready().then(() => {
      this.setDisplayIsDesktopProperty(this.platform.width());
    });
  }

  @HostListener('window:resize', ['$event'])
  windowResize(event: any) {
    this.setDisplayIsDesktopProperty(event.target.innerWidth);
  }

  setDisplayIsDesktopProperty(width: number) {
    this.displayIsDesktop = width > DESKTOP_BREAKPOINT;
  }

  ngOnInit() {
  }
}

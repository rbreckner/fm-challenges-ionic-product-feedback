import {Component, HostListener, OnInit} from '@angular/core';
import {MenuController, Platform} from '@ionic/angular';
import {BehaviorSubject, combineLatest, map} from 'rxjs';

import {SuggestionSortOptions} from './suggestion-sort-options';
import {ProductRequestRepository} from '../../../data/product-request/product-request.repository';
import {ProductRequest} from '../../../data/product-request/product-request';
import {productRequestsMock} from '../../../data/mock-data';

const DESKTOP_BREAKPOINT = 992

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {
  trackById = (obj: any) => obj.id;

  displayIsDesktop = false;
  menuOpen = false;

  categories = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'];

  sortBy$ = new BehaviorSubject(SuggestionSortOptions.MostUpvotes);
  categoryFilter$ = new BehaviorSubject('All')

  suggestions$ = combineLatest([
    this.productRequestRepo.selectSuggestions(),
    this.categoryFilter$,
    this.sortBy$
  ]).pipe(map(([productRequests, categoryFilter, sortBy]) => {
    return productRequests
      .filter(x => categoryFilter === 'All' || categoryFilter === x.category)
      .sort((a, b) => {
        if (sortBy === SuggestionSortOptions.MostUpvotes) {
          return b.upVotes - a.upVotes;
        } else if (sortBy === SuggestionSortOptions.LeastUpvotes) {
          return a.upVotes - b.upVotes;
        } else if (sortBy === SuggestionSortOptions.MostComments) {
          return (b.comments ? b.comments.length : 0) - (a.comments ? a.comments.length : 0);
        } else if (sortBy === SuggestionSortOptions.LeastComments) {
          return (a.comments ? a.comments.length : 0) - (b.comments ? b.comments.length : 0);
        }
        return 0;
      })
  }))

  mappedStatuses$ = this.productRequestRepo.selectMappedStatuses();

  constructor(private platform: Platform,
              private menuController: MenuController,
              private productRequestRepo: ProductRequestRepository) {
    this.platform.ready().then(() => {
      this.setDisplayIsDesktopProperty(this.platform.width());
    });
  }

  @HostListener('window:resize', ['$event'])
  windowResize(event: any) {
    this.menuController.close();
    this.setDisplayIsDesktopProperty(event.target.innerWidth);
  }

  setDisplayIsDesktopProperty(width: number) {
    this.displayIsDesktop = width > DESKTOP_BREAKPOINT;
  }

  ngOnInit() {
  }
}

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SuggestionSortOptions} from '../suggestion-sort-options';

@Component({
  selector: 'app-suggestion-sort',
  templateUrl: './suggestion-sort.component.html',
  styleUrls: ['./suggestion-sort.component.scss']
})
export class SuggestionSortComponent implements OnInit {
  suggestionSortOptions = [
    {
      value: SuggestionSortOptions.MostUpvotes,
      text: 'Most Upvotes'
    },
    {
      value: SuggestionSortOptions.LeastUpvotes,
      text: 'Least Upvotes'
    },
    {
      value: SuggestionSortOptions.MostComments,
      text: 'Most Comments'
    },
    {
      value: SuggestionSortOptions.LeastComments,
      text: 'Least Comments'
    }
  ]

  value = SuggestionSortOptions.MostUpvotes;

  @Output() selected = new EventEmitter<SuggestionSortOptions>();

  constructor() {
  }

  setSort(event: any) {
    const option: SuggestionSortOptions = event.detail.value;
    this.value = option;
    this.selected.emit(option);
  }

  ngOnInit() {
  }

}

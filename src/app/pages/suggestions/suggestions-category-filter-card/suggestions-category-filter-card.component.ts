import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-suggestions-category-filter-card',
  templateUrl: './suggestions-category-filter-card.component.html',
  styleUrls: ['./suggestions-category-filter-card.component.scss']
})
export class SuggestionsCategoryFilterCardComponent implements OnInit {
  @Input() categories: string[] = [];
  @Input() selectedCategory = '';

  @Output() categorySelected = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

}

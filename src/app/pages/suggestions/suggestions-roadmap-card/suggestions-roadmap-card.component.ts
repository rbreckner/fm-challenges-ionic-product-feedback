import {Component, Input, OnInit} from '@angular/core';
import {Status} from '../../../../data/model/statuses';

@Component({
  selector: 'app-suggestions-roadmap-card',
  templateUrl: './suggestions-roadmap-card.component.html',
  styleUrls: ['./suggestions-roadmap-card.component.scss'],
})
export class SuggestionsRoadmapCardComponent  implements OnInit {
  @Input() statuses: Status[] = [];

  constructor() { }

  ngOnInit() {}

}

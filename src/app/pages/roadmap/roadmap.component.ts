import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, combineLatest, map} from 'rxjs';

import {statuses} from '../../../data/model/statuses';
import {ProductRequestRepository} from '../../../data/product-request/product-request.repository';


@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss']
})
export class RoadmapComponent implements OnInit {
  trackById = (obj: any) => obj.id;

  statuses = statuses;
  selectedStatusValue$ = new BehaviorSubject('In-Progress');
  mappedStatuses$ = this.productRequestRepo.selectMappedStatuses();
  selectedStatus$ = combineLatest([
    this.productRequestRepo.selectMappedStatuses(),
    this.selectedStatusValue$
  ]).pipe(
    map(([statuses, selectedStatusValue]) => {
      return statuses.find(x => x.name === selectedStatusValue)
    })
  );

  constructor(private productRequestRepo: ProductRequestRepository) {
  }

  ngOnInit() {
  }

  log($event: any) {
    console.log($event);
  }

  statusSelected(event: any) {
    this.selectedStatusValue$.next(event.detail.value);
  }
}

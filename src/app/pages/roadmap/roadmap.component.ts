import {Component, OnInit} from '@angular/core';
import {ProductRequestService} from '../../../data/product-request.service';
import {ProductRequest} from '../../../data/model/product-request';
import {Status, statuses} from '../../../data/model/statuses';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss']
})
export class RoadmapComponent implements OnInit {
  statuses = statuses;
  productRequests: ProductRequest[];

  selectedStatusValue = 'In-Progress';

  get selectedStatus(): Status | undefined {
    return statuses.find(x => x.name === this.selectedStatusValue);
  }

  get filteredRequests() {
    return this.productRequests.filter(x => x.status === this.selectedStatusValue.toLowerCase());
  }

  constructor(private productRequestService: ProductRequestService) {
    this.productRequests = productRequestService.productRequests;
  }

  ngOnInit() {
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {Status} from '../../../../data/model/statuses';
import {ProductRequest} from '../../../../data/product-request/product-request';

@Component({
  selector: 'app-roadmap-column',
  templateUrl: './roadmap-column.component.html',
  styleUrls: ['./roadmap-column.component.scss']
})
export class RoadmapColumnComponent implements OnInit {
  @Input() status: Status | undefined;
  @Input() productRequests: ProductRequest[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}

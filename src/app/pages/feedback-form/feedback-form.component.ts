import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductRequestService} from '../../../data/product-request.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductRequest} from '../../../data/model/product-request';
import { statuses } from 'src/data/model/statuses';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class FeedbackFormComponent implements OnInit {
  productRequestId: number | null = null;
  productRequestForm: FormGroup | undefined;
  categories = ['UI', 'UX', 'Enhancement', 'Bug', 'Feature']
  statuses = [
    {
      name: 'Suggestion'
    },
    ...statuses
  ];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder,
              private productRequestService: ProductRequestService) {
    const productRequestId = route.snapshot.params['id'];
    if (productRequestId) {
      this.productRequestId = productRequestId;
      const productRequest = this.productRequestService.productRequest(Number(productRequestId));
      this.initializeForm(productRequest);
    } else {
      this.initializeForm();
    }
  }

  initializeForm(productRequest?: Partial<ProductRequest>) {
    if (!productRequest) {
      productRequest = {title: '', category: '', description: '', status: 'suggestion'};
    }
    console.log(productRequest);
    this.productRequestForm = this.fb.group({
      title: [productRequest.title, Validators.required],
      category: [productRequest.category],
      description: [productRequest.description],
      status: [productRequest.status]
    })
  }

  ngOnInit() {
  }

  save() {

  }

  delete() {

  }
}

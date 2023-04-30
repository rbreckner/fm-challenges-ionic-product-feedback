import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductRequestService} from '../../../data/product-request.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductRequest} from '../../../data/model/product-request';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss'],
})
export class FeedbackFormComponent  implements OnInit {
  productRequestForm: FormGroup | undefined;
  categories = ['UI', 'UX', 'Enhancement', 'Bug', 'Feature']

  constructor(private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder,
              private productRequestService: ProductRequestService) {
    const productRequestId = route.snapshot.params['id'];
    if (productRequestId) {
      const productRequest = this.productRequestService.productRequest(Number(productRequestId));
      this.initializeForm(productRequest);
    } else {
      this.initializeForm();
    }
  }

  initializeForm(productRequest?: Partial<ProductRequest>) {
    if(!productRequest) {
      productRequest = {title: '', category: '', description: ''};
    }
    this.productRequestForm = this.fb.group({
      title: [productRequest.title, Validators.required],
      category: [productRequest.category],
      description: [productRequest.description]
    })
  }

  ngOnInit() {}

  save() {

  }
}

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductRequest} from '../../../data/product-request/product-request';
import {statuses} from 'src/data/model/statuses';
import {ProductRequestRepository} from '../../../data/product-request/product-request.repository';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss']
})
export class FeedbackFormComponent implements OnInit {
  productRequestId: string | null = null;
  form: FormGroup = this.buildForm();
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
              private productRequestRepo: ProductRequestRepository) {
    const productRequestId = route.snapshot.params['id'];
    if (productRequestId) {
      this.productRequestId = productRequestId;
      const productRequest = this.productRequestRepo.getProductRequest(productRequestId);
      this.form = this.buildForm(productRequest);
    }
  }

  buildForm(productRequest?: Partial<ProductRequest>) {
    if (!productRequest) {
      productRequest = {title: '', category: '', description: '', status: 'Suggestion'};
    }
    return this.fb.group({
      title: [productRequest.title, Validators.required],
      category: [productRequest.category],
      description: [productRequest.description],
      status: [productRequest.status]
    })
  }

  ngOnInit() {
  }

  save() {
    if (this.productRequestId) {
      this.productRequestRepo.update(this.productRequestId, this.form.value);
    } else {
      this.productRequestRepo.add(this.form.value);
    }
    this.router.navigate(['/']);
  }

  delete() {

  }
}

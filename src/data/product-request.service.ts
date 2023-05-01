import {Injectable} from '@angular/core';
import {ProductRequest} from './product-request/product-request';
import {productRequestsMock} from './product-requests-mock';

@Injectable({
  providedIn: 'root'
})
export class ProductRequestService {
  productRequests: ProductRequest[] = productRequestsMock;

  constructor() {
  }

  productRequest(id: number) {
    return this.productRequests.find(x => x.id === id);
  }

  // addComment(productRequestId: number, comment: string) {
  //   const index = this.productRequests.findIndex(x => x.id === productRequestId);
  //   const updatedRequest = {
  //     ...this.productRequests[index],
  //   }
  // }
}

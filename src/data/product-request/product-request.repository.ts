import {Injectable} from '@angular/core';
import {createStore} from '@ngneat/elf';
import {addEntities, selectAllEntities, selectManyByPredicate, withEntities} from '@ngneat/elf-entities';
import {ProductRequest} from './product-request';
import {map, Observable} from 'rxjs';
import {productRequestsMock} from '../product-requests-mock';
import {Status, statuses} from '../model/statuses';

const store = createStore(
  {name: 'App-ProductRequests'},
  withEntities<ProductRequest>()
)

@Injectable({
  providedIn: 'root'
})
export class ProductRequestRepository {

  constructor() {
    this.fillWithMockData()
  }

  getSuggestions(): Observable<ProductRequest[]> {
    return store.pipe(
      selectManyByPredicate(x => x.status === 'Suggestion')
    )
  }

  getMappedStatuses(): Observable<Status[]> {
    return store.pipe(
      selectAllEntities(),
      map(x => {
        return statuses.map(status => ({
          ...status,
          productRequests: x.filter(
            productRequest => productRequest.status === status.name
          )
        }))
      })
    )
  }

  fillWithMockData() {
    store.update(addEntities(productRequestsMock))
  }
}

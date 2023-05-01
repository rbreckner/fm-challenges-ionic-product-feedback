import {Injectable} from '@angular/core';
import {createStore} from '@ngneat/elf';
import {addEntities, selectMany, withEntities} from '@ngneat/elf-entities';
import {Observable} from 'rxjs';

import {User} from './user';
import {usersMock} from '../mock-data';

const store = createStore(
  {name: 'App-Users'},
  withEntities<User>()
)

@Injectable({
  providedIn: 'root'
})
export class UserRepository {
  constructor() {
    this.fillWithMockData()
  }

  fillWithMockData() {
    store.update(addEntities(usersMock))
  }

  getUsers(userIds: string[]): Observable<User[]> {
    return store.pipe(selectMany(userIds));
  }
}

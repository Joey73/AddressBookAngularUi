import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Contact} from './contact';

@Injectable()
export class ContactService {
  url = 'api/customers';

  constructor(private http: Http) { }

  getCustomers(): Promise<Contact[]> {
    return this.http.get(this.url)
      .toPromise()
      .then((res) => res.json().data);
  }
}

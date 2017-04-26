import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { Contact } from './contact';
import { MockDatenService } from "app/services/mock-daten.service";

@Injectable()
export class ContactService {

  constructor(private mockDatenService: MockDatenService) {
  }

  getContacts(): Contact[] {
    return this.mockDatenService.getContacts();
  }
}

import { Injectable } from '@angular/core';

import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Contact} from './contact';

@Injectable()
export class MockDatenService implements InMemoryDbService {
  createDb(): {} {
    const contacts: Contact[] = [
      {
        id: 1,
        firstname: 'Testfirstname1',
        lastname: 'Testlastname1',
        street: 'Teststreet1',
        housenumber: '12',
        zip: '12345',
        city: 'Testcity1',
        country: 'Germany',
        phone: '54321'
      },
      {
        id: 2,
        firstname: 'Testfirstname2',
        lastname: 'Testlastname2',
        street: 'Teststreet2',
        housenumber: '21',
        zip: '6789',
        city: 'Testcity2',
        country: 'Germany',
        phone: '9876'
      },
      {
        id: 3,
        firstname: 'Testfirstname3',
        lastname: 'Testlastname3',
        street: 'Teststreet3',
        housenumber: '34',
        zip: '0815',
        city: 'Testcity3',
        country: 'Germany',
        phone: '4711'
      }
    ];

    return {contacts};
  }

  constructor() { }
}

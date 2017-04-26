import { Component, OnInit } from '@angular/core';
import {Contact} from '../../services/contact';
import {ContactService} from '../../services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.getContacts();
  }

  private getContacts() {
    this.contacts = this.contactService.getContacts();
  }
}

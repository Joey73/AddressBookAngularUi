import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Contact} from '../../services/contact';
import {ContactService} from '../../services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[];
  //selectedItem: Contact;
  @Output() contactListItemSelectedEventEmitter = new EventEmitter();


  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.getContacts();
  }

  private getContacts() {
    this.contacts = this.contactService.getContacts();
  }

  private onItemSelected(item: any) {
    console.log('Contact selected: ' + item.id);
    this.contactListItemSelectedEventEmitter.emit(item);
  }
}

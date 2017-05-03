import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ContactService } from "app/services/contact.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Address Book Angular UI';
  @Input() item: any;

  // Dependency Injection (DI)
  constructor(private contactService: ContactService) {
  }

  ngOnInit(): void {
  }

  private onItemSelected(item: any) {
    console.log('Contact selected: ' + item.id);
    this.item = item;
  }
}

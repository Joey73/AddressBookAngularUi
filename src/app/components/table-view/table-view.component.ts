import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Contact } from '../../services/contact';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {
  @Input() items;
  @Output() emitEvent = new EventEmitter();
  @Output() emitEditEvent = new EventEmitter();

  selectedItem: any;

  constructor() { }

  ngOnInit() {
  }

  tableEvent(item) {
    this.emitEvent.emit(item);
  }

  editEvent(item) {
    this.emitEditEvent.emit(item);
  }

  onSelect(item): void {
    console.log('Contact selected: ' + item.id);
    this.selectedItem = item;
  }
}

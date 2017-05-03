import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Contact } from '../../services/contact';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {
  @Input() items;
  @Output() tableViewItemSelectedEventEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSelect(item): void {
    console.log('Contact selected: ' + item.id);
    this.tableViewItemSelectedEventEmitter.emit(item);
  }
}

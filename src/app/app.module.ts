import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

import {environment} from '../environments/environment';
import {InMemoryBackendConfigArgs, InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {MockDatenService} from './services/mock-daten.service';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { TableViewComponent } from './components/table-view/table-view.component';
import { ContactService } from "app/services/contact.service";
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    TableViewComponent,
    ContactDetailsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ContactService, MockDatenService],
  bootstrap: [AppComponent]
})
export class AppModule { }

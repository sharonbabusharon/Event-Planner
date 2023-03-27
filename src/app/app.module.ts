import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EventManagerComponent } from './event-manager/event-manager.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddEventComponent } from './add-event/add-event.component';
import { ViewEventComponent } from './view-event/view-event.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { EventsComponent } from './events/events.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EventManagerComponent,
    PageNotFoundComponent,
    AddEventComponent,
    ViewEventComponent,
    UpdateEventComponent,
    EventsComponent,
    FilterPipe
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

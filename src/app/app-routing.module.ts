import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEventComponent } from './add-event/add-event.component';
import { EventManagerComponent } from './event-manager/event-manager.component';
import { EventsComponent } from './events/events.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { ViewEventComponent } from './view-event/view-event.component';

const routes: Routes = [
  { path:"" ,redirectTo: "event/admin", pathMatch:"full"},
  
  { path:"event/admin" , component:EventManagerComponent},

  { path:"event/add" , component:AddEventComponent},

  { path:"event/update/:eventId" , component:UpdateEventComponent},

  { path:"event/view/:eventId" , component:ViewEventComponent},
  

  { path:"event/events" ,component:EventsComponent},

  { path:"**" ,component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

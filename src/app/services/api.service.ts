import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { myEvents } from 'src/model/myEvents';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  //now to get all events

  baseUrl:string="http://localhost:3000/events"

  getAllEvents():Observable<myEvents>{
    return this.http.get(this.baseUrl)
  }

  //add new events
  addEvent(eventBody:any){
 return this.http.post(this.baseUrl,eventBody)
  }

  //to delete events
  deleteEvent(eventId:any){
    return this.http.delete(`${this.baseUrl}/${eventId}`)
  }
  //function to view specific event

  viewEvent(eventId:any){
    return this.http.get(`${this.baseUrl}/${eventId}`)
  }

  //function to update a event

  updateEvent(eventId:any,eventBody:any){
    return this.http.put(`${this.baseUrl}/${eventId}`,eventBody)
  }


 

  
}

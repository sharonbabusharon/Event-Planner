import { Component, OnInit } from '@angular/core';
import { myEvents } from 'src/model/myEvents';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit{

  searchKey:string=''

  allEvents:myEvents[]=[];

  constructor(private api:ApiService) {}



  ngOnInit(): void {
    
  this.getAllEvents()

  }

  getAllEvents(){
    this.api.getAllEvents().subscribe((data:any)=>{
      console.log(data);//all contact details
      this.allEvents=data;
      
    })
  }
  search(event:any){
    console.log(event.target.value);
    this.searchKey=event.target.value
    
  }
  //delete events
  deleteEvent(eventId:any){
    this.api.deleteEvent(eventId).subscribe((data)=>{
      this.getAllEvents()
    })
  }

}

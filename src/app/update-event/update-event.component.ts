import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { myEvents } from 'src/model/myEvents';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {
  
  
  eventId:string='';
  eventBody:myEvents={};

  constructor(private api:ApiService,private activatedRoute:ActivatedRoute,private route:Router) {}


  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data.eventId);
      this.eventId=data.eventId

   
      

      this.api.viewEvent(this.eventId).subscribe((data:any)=>{
        console.log(data);
        this.eventBody=data
      })
    })
  }
  updateEvent(){
    this.api.updateEvent(this.eventId,this.eventBody).subscribe((data:any)=>{
      this.route.navigateByUrl('')
 

    })
  }
  }



import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private api:ApiService) {}

  eventId:string=''
  event:any

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data);
      this.eventId=data.eventId

      this.api.viewEvent(this.eventId).subscribe((data:any)=>{
        console.log(data);
        this.event=data
        
      })
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { myEvents } from 'src/model/myEvents';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit{

  event:myEvents={}

  name:any

  constructor(private api:ApiService, private route:Router) {}

  ngOnInit(): void {
  
  }
  addEvent(){
    this.api.addEvent(this.event).subscribe((data:any)=>{
      this.route.navigateByUrl('')
      
      
    })

  }
}


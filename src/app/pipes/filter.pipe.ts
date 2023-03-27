import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  //all events -array, searchkey-diya ,propnqame-name
  transform(allEvents:any=[] ,searchkey:string, propname:string): any[]  {
    
  const result:any=[]

    if(!allEvents||searchkey==''||propname=="")
    {
      return allEvents;
    }
    
    allEvents.forEach((events:any)=>{
      if(events[propname].trim().toLowerCase().startsWith(searchkey.toLowerCase())){
        result.push(events)
      }

    })
    return result;
  }

}

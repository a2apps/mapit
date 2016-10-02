import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MarkerService } from './marker.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'My first angular2-google-maps project';
  zoom: number = 10;
  lat: number = 26.523851; 
  lng: number = 93.962337;
  markers: marker[];
  
  constructor(private _ms:MarkerService){
    this.markers= _ms.getMarkers();
  }
  markerForm: FormGroup=new FormGroup({
      name: new FormControl('', Validators.required),
      lat: new FormControl('', Validators.required),
      lng: new FormControl('', Validators.required),
      draggable: new FormControl('', Validators.required),
    });
  clickedMarker(marker:marker, index: number){
    console.log("Clicked at: "+marker.name+" for index: "+ index);
  }
  addMarker(marker:any){
    if(this.markerForm.valid){
        if(marker.draggable=="yes"){
          var isDraggable=true;
        }else{
          var isDraggable=false;
        }
        var newMarker={
          name: marker.name,
          lat: parseFloat(marker.lat),
          lng: parseFloat(marker.lng),
          draggable: isDraggable
        }
        this.markers.push(newMarker);
        this._ms.addMarkers(newMarker);
    }else{
      alert('Please fill in all fields!')
    }
  }
  mapClicked($event){
    var newMarker: marker={
      name: 'Untitled',
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: false
    }
     this.markers.push(newMarker);
     this._ms.addMarkers(newMarker);
  }
  markerDragEnd(marker: any, $event){
    console.log('dragEnd', marker, $event);
    var updMarker={
      name: marker.name,
      lat: parseFloat(marker.lat),
      lng: parseFloat(marker.lng),
      draggable: false
    }
    var newlat= $event.coords.lat;
    var newlng =$event.coords.lng;
    this._ms.updateMarker(marker, newlat, newlng);
  }
  removeMarker(marker: marker){
    for(let i=0; i<this.markers.length; i++){
      if(marker.lat==this.markers[i].lat && marker.lng == this.markers[i].lng){
        this.markers.splice(i, 1);
      }
    }
    this._ms.removeMarker(marker);
  }
}
interface marker{
  name?:string;
  lat:number;
  lng:number;
  draggable: boolean;
}
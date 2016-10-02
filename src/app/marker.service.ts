import { Injectable } from '@angular/core';
import { Init } from './init-markers';
@Injectable()
export class MarkerService extends Init {

    constructor() { 
        super();
        console.log('Service initialized!');
        this.load();
    }
    getMarkers(){
        var markers=JSON.parse(localStorage.getItem('markers'));
        return markers;
    }
    addMarkers(marker:any){
        var markers=JSON.parse(localStorage.getItem('markers'));
        markers.push(marker);
        localStorage.setItem('markers', JSON.stringify(markers));
    }
    updateMarker(marker:any, newlat:number, newlng:number){
        var markers=JSON.parse(localStorage.getItem('markers'));
        for(let i=0; i<markers.length; i++){
            if (marker.lat == markers[i].lat && marker.lng == markers[i].lng){
                markers[i].lat= newlat;
                markers[i].lng= newlng;
            }
        }
        localStorage.setItem('markers', JSON.stringify(markers));
    }
    removeMarker(marker:any){
        var markers=JSON.parse(localStorage.getItem('markers'));
        for(let i=0; i<markers.length; i++){
            if (marker.lat == markers[i].lat && marker.lng == markers[i].lng){
               markers.splice(i, 1);
            }
        }
        localStorage.setItem('markers', JSON.stringify(markers));
    }
}
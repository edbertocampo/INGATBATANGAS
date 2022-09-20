import { Component, ElementRef, ViewChild } from '@angular/core';
import { GoogleMap, Marker } from '@capacitor/google-maps'
import { config } from 'process';
import { element } from 'protractor';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.page.html',
  styleUrls: ['./circle.page.scss'],
})
export class CirclePage {

  @ViewChild('map')mapRef: ElementRef;
  map: GoogleMap;

  constructor() { }

  ionViewDidEnter(){
    this.createMap();
  }

  async createMap(){
    this.map =  await GoogleMap.create({
    id:'my-map',
    apiKey: environment.mapsKey,
    element: this.mapRef.nativeElement,
    config: {
      center: {
        lat: 13.8220,
        lng:121.1341,
      },
      zoom: 8,
    },
    });
    // this.addMarkers();
  }

  // async addMarkers(){
  //   const markers: Marker [] = [
  //     {
  //     coordinate: {
  //       lat: 33.7,
  //       lng: -117.8,
  //     },
  //     title: 'localhost',
  //     snippet: 'Best place on earth'
  //   },

  //   {
  //     coordinate:{
  //       lat: 33.7,
  //       lng: -117.2,
  //     },
  //     title: 'random place',
  //     snippet: 'Not sure'
  //   },
  // ];
  
  // await this.map.addMarkers(markers);
  // }
}

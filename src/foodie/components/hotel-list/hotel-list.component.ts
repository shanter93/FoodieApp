import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DataService } from '../../services/data-service';

@Component({
  selector: 'hotel-list-component',
  templateUrl: 'hotel-list.component.html'
})
export class HotelListComponent implements OnInit {

  hotels: any;
  searchQuery: string = '';

  constructor(public navCtrl: NavController,
    private dataComposer: DataService) {

  }

  ngOnInit() {
    this.getHotelList();
  }

  getHotelList() {
    this.hotels = this.dataComposer.getData();
  }


  getItems(ev: any) {
    // Reset items back to all of the items
    this.getHotelList();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.hotels = this.hotels.filter((hotel) => {
        return (hotel.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}

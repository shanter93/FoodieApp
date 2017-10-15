import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DataService } from '../../services/data-service';

@Component({
  selector: 'home-component',
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {

  cuisines: any;

  constructor(public navCtrl: NavController,
    private dataComposer: DataService) {

  }

  ngOnInit() {
    this.getCuisines();
  }

  getCuisines() {
    this.cuisines = this.dataComposer.getCuisineTypes();
  }

}

import { Component, OnInit } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';

import { DataService } from '../../services/data-service';
import { FilterPage } from '../../pages/filter/filter.page';

import { filter, includes, shuffle } from 'lodash';

@Component({
  selector: 'hotel-list-component',
  templateUrl: 'hotel-list.component.html'
})
export class HotelListComponent implements OnInit {

  hotels: any;
  class: any;
  types: any;
  cuisines: any;
  searchQuery: string = '';
  selectedClasses: any[] = [];
  selectedTypes: any[] = [];
  selectedCuisines: any[] = [];
  filteredList:any;

  constructor(public navCtrl: NavController,
    public popoverCtrl: PopoverController,
    private dataComposer: DataService) {

  }

  ngOnInit() {
    this.initializeData();
  }

  initializeData() {
    this.class = this.dataComposer.getClassTypes();
    this.hotels = shuffle(this.dataComposer.getData());
    this.types = this.dataComposer.getTypes();
    this.cuisines = this.dataComposer.getCuisineTypes();
  }

  presentPopover(myEvent) {
    let data = {
      class: this.class,
      types: this.types,
      cuisines: this.cuisines,
      selectedClasses: this.selectedClasses,
      selectedTypes: this.selectedTypes,
      selectedCuisines: this.selectedCuisines
    }
    let popover = this.popoverCtrl.create(FilterPage, data);
    popover.present({
      ev: myEvent
    });
    popover.onDidDismiss((popoverData) => {
      console.log(popoverData)
      if (popoverData) {
        this.selectedClasses = popoverData.selectedClasses;
        this.selectedTypes = popoverData.selectedTypes;
        this.selectedCuisines = popoverData.selectedCuisines;
        this.filterHotelList(popoverData);
      }
    })
  }

  filterByCuisines(popoverData, typeFiltered) {
    let cuisineFiltered;
    let cuisineFilteredFinal = [];
    if (popoverData.selectedCuisines.length) {
      popoverData.selectedCuisines.forEach(function (val, key) {
        cuisineFiltered = filter(typeFiltered,  function(o) 
        { return includes(o.cuisineTypes, val); });
        console.log(cuisineFiltered)
        cuisineFiltered.forEach(function(each, key) {
          cuisineFilteredFinal.push(each);
        });
      });
    }
    else {
      cuisineFilteredFinal = typeFiltered;
    }
    console.log("Cfinal : ", cuisineFilteredFinal)
    return cuisineFilteredFinal;
  }

  filterByType(popoverData, classFiltered) {
    let typeFiltered;
    let typeFilteredFinal = [];
    if (popoverData.selectedTypes.length) {
      popoverData.selectedTypes.forEach(function (value, key) {
        typeFiltered = filter(classFiltered, {"type" : value});
        console.log(typeFiltered)
        typeFiltered.forEach(function(each, key) {
          typeFilteredFinal.push(each);
        });
      });
    }
    else {
      typeFilteredFinal = classFiltered;
    }
    console.log("tfinal : ",typeFilteredFinal)
    return typeFilteredFinal;
  }

  filterByClass(popoverData,completeData) {
    let classFiltered;
    let classFilteredFinal = [];
    if (popoverData.selectedClasses.length) {
      popoverData.selectedClasses.forEach(function (val, key) {
        classFiltered = filter(completeData, {"class" : val});
        console.log(classFiltered)
        classFiltered.forEach(function(each, key) {
          classFilteredFinal.push(each);
        });
      });
    }
    else {
      classFilteredFinal = completeData;
    }
    console.log("Cfinal : ", classFilteredFinal)
    return classFilteredFinal;
  }

  filterHotelList(popoverData) {
    let hotels = this.dataComposer.getData();;
    
    let classFilter =  this.filterByClass(popoverData,hotels);
    let typeFilter = this.filterByType(popoverData,classFilter);
    let cuisineFilter = this.filterByCuisines(popoverData,typeFilter);
    this.filteredList = cuisineFilter;
    this.hotels = cuisineFilter;
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.hotels = this.filteredList;

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

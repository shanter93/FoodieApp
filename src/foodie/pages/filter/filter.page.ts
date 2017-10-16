import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

import { pull } from 'lodash';

@Component({
    selector: 'page-filter',
    templateUrl: 'filter.page.html'
})
export class FilterPage {

    classes: any;
    types: any;
    cuisines: any;
    showClasses: boolean;
    showTypes: boolean;
    showCuisines: boolean;

    selectedClasses: any[] = [];
    selectedTypes: any[] = [];
    selectedCuisines: any[] = [];

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public viewCtrl: ViewController
    ) {
        this.classes = this.navParams.get('class');
        this.types = this.navParams.get('types');
        this.cuisines = this.navParams.get('cuisines');
        this.selectedClasses = this.navParams.get('selectedClasses');
        this.selectedTypes = this.navParams.get('selectedTypes');
        this.selectedCuisines = this.navParams.get('selectedCuisines');
    }

    ngOnInit() {
        this.showClasses = true;
        this.showTypes = false;
        this.showCuisines = false;
    }

    toggleClass() {
        this.showClasses = !this.showClasses;
    }

    toggleTypes() {
        this.showTypes = !this.showTypes;
    }

    toggleCuisines() {
        this.showCuisines = !this.showCuisines;
    }

    updateSelectedClass(data) {
        if (data.selected) {
            this.selectedClasses.push(data.id);
        }
        else {
            pull(this.selectedClasses, data.id);
        }
        console.log(this.selectedClasses)
    }

    updateSelectedType(data) {
        if (data.selected) {
            this.selectedTypes.push(data.id);
        }
        else {
            pull(this.selectedTypes, data.id);
        }
        console.log(this.selectedTypes)
    }

    updateSelectedCuisines(data) {
        if (data.selected) {
            this.selectedCuisines.push(data.id);
        }
        else {
            pull(this.selectedCuisines, data.id);
        }
        console.log(this.selectedCuisines)
    }

    clearAllFilters() {
        this.classes.forEach(function (val, key) {
            val.selected = false;
        });
        this.types.forEach(function (val, key) {
            val.selected = false;
        });
        this.cuisines.forEach(function (val, key) {
            val.selected = false;
        });
        this.selectedTypes = [];
        this.selectedClasses = [];
        this.selectedCuisines = [];
    }

    filterData() {
        let data = {
            selectedClasses: this.selectedClasses,
            selectedTypes: this.selectedTypes,
            selectedCuisines: this.selectedCuisines
        };
        this.viewCtrl.dismiss(data);
    }

}

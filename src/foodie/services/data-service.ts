import { Injectable } from '@angular/core';

import * as data from './data-constant';

@Injectable()
export class DataService {

    constructor() {

    }

    getData() {
        return data.DATA;
    }

    getCuisineTypes() {
        return data.CUISINE_TYPES;
    }
}
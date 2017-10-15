import { Injectable } from '@angular/core';

import DATA from './data-constant';

@Injectable()
export class DataService {

    constructor() {

    }

    getData() {
        return DATA;
    }
}
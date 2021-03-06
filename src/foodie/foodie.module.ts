import { NgModule, ErrorHandler } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { FilterPage } from './pages/filter/filter.page';

import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { AboutComponent } from './components/about/about.component';

import { HomePage } from './pages/home/home.page';
import { AboutPage } from './pages/about/about.page';

import { TabsPage } from './pages/tabs/tabs';

import { DataService } from './services/data-service';

@NgModule({
    declarations: [
        FilterPage,
        HotelListComponent,
        AboutComponent,
        
        HomePage,
        AboutPage,

        TabsPage
    ],
    imports: [
        IonicModule
    ],
    entryComponents: [
        FilterPage,
        TabsPage,
        HomePage,
        AboutPage,
    ],
    providers: [
        DataService
    ]
  })
  export class FoodieModule {}
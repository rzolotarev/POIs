import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PoiListComponent } from './poi-list/poi-list.component';
import { CinemaPoiComponent } from './cinema-poi/cinema-poi.component';
import { RestaurantPoiComponent } from './restoraunt-poi/restaurant-poi.component';

const appRoutes: Routes = [{
  path: 'Cinema/:id', component: CinemaPoiComponent
}, {
  path: 'Restaurant/:id', component: RestaurantPoiComponent,  
}, {
  path: '', component: PoiListComponent
},
  { path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },
]; 

@NgModule({
  declarations: [
    AppComponent,
    PoiListComponent,
    CinemaPoiComponent,
    RestaurantPoiComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

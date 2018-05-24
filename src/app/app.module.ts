import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';
//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

//services
import { MapasService } from './services/mapas.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDreMKjtJ-jrau9ZuVGwXuHZLrNJWVgugQ'
    })
  ],
  providers: [MapasService],
  bootstrap: [AppComponent]
})
export class AppModule { }

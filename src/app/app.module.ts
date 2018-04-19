import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { Ng2ScrollableModule } from 'ng2-scrollable';
import { ParticlesModule } from 'angular-particle';
import {ConstantsService  } from '../app/constants.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2ScrollableModule,
    ParticlesModule
  ],
  providers: [
    ConstantsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

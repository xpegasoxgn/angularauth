import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthModule } from './auth/auth.module';


import  Aura  from '@primeng/themes/aura';
import { providePrimeNG } from 'primeng/config';

import {ButtonModule} from 'primeng/button';
import { HomeComponent } from './home/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    ButtonModule
  ],
  providers: [

    providePrimeNG({
      theme:{preset:Aura}
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

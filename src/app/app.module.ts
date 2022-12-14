import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSoapModule } from 'ngx-soap';
import {FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

const ANGULAR_MATERIAL_MODULES = [
  MatToolbarModule, MatInputModule, MatButtonModule, MatCardModule,
  MatProgressBarModule, MatFormFieldModule
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSoapModule,
    FormsModule,
    BrowserAnimationsModule,
    ANGULAR_MATERIAL_MODULES
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

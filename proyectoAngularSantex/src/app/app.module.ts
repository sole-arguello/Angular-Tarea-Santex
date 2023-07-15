import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//components
import { ButtonsComponent } from './buttons/buttons.component';

//angular material
import { MaterialModule } from '../app/material/material.module'; 

import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component'


@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    TableComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

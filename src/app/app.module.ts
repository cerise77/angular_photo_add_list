import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule }   from '@angular/common/http';

import { AppComponent }   from './app.component';
import {BagPopupComponent} from "./popup/bag-popup/bag-popup.component";
import {BagService} from "./services/bag.service";
import {HeaderComponent} from "./header/header.component";

import { HttpService } from './services/http.service';
import { SearchPipe} from './filter.pipe';



@NgModule({
    imports:      [ BrowserAnimationsModule, BrowserModule, CommonModule, FormsModule, HttpClientModule],
    declarations: [ AppComponent, SearchPipe, BagPopupComponent, HeaderComponent],
    providers: [HttpService, BagService],
    bootstrap:    [ AppComponent ]


})
export class AppModule { }

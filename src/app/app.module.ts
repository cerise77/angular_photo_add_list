import { NgModule }      from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule }   from '@angular/common/http';

import { AppComponent }   from './app.component';
import { ChildComponent }   from './app.childComponent';

import { HttpService }   from './http.service';

import { SearchPipe} from './filter.pipe';



@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpClientModule],
    declarations: [
                    AppComponent, SearchPipe, ChildComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassComponent } from './class/class.component';
import { ClassesListComponent } from './classes-list/classes-list.component';
import { ClassDetailsComponent } from './class-details/class-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassComponent,
    ClassesListComponent,
    ClassDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

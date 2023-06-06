import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassDetailsComponent } from './features/home/class-details/class-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClassesListComponent } from './features/home/classes-list/classes-list.component';
import { ClassEditorComponent } from './features/home/class-editor/class-editor.component';
import { StudentsListComponent } from './features/home/students-list/students-list.component';
import { StudentsEditorComponent } from './features/home/students-editor/students-editor.component';
import { StudentsDetailsComponent } from './features/home/students-details/students-details.component';
import { HomeComponent } from './features/home/home.component';
import { NavbarComponent } from './core/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassesListComponent,
    ClassDetailsComponent,
    ClassEditorComponent,
    StudentsListComponent,
    StudentsEditorComponent,
    StudentsDetailsComponent,
    HomeComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

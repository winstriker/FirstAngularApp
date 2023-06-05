import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassesListComponent } from './classes-list/classes-list.component';
import { ClassDetailsComponent } from './class-details/class-details.component';
import { ClassEditorComponent } from './class-editor/class-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuSelectorComponent } from './menu-selector/menu-selector.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentsEditorComponent } from './students-editor/students-editor.component';
import { StudentsDetailsComponent } from './students-details/students-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassesListComponent,
    ClassDetailsComponent,
    ClassEditorComponent,
    MenuSelectorComponent,
    StudentsListComponent,
    StudentsEditorComponent,
    StudentsDetailsComponent,
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

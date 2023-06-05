import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassDetailsComponent } from './class-details/class-details.component';
import { ClassesListComponent } from './classes-list/classes-list.component';
import { ClassEditorComponent } from './class-editor/class-editor.component';
import { MenuSelectorComponent } from './menu-selector/menu-selector.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentsEditorComponent } from './students-editor/students-editor.component';
import { StudentsDetailsComponent } from './students-details/students-details.component';

const routes: Routes = [
  { path: 'class', component:ClassesListComponent },
  { path: 'class/:id', component:ClassDetailsComponent },
  { path: 'class/edit/:id', component:ClassEditorComponent },
  { path: 'student', component:StudentsListComponent },
  { path: 'student/:id', component:StudentsDetailsComponent },
  { path: 'student/edit/:id', component:StudentsEditorComponent },
  { path:'**', component:MenuSelectorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

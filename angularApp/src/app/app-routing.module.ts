import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassDetailsComponent } from './features/home/class-details/class-details.component';
import { ClassesListComponent } from './features/home/classes-list/classes-list.component';
import { ClassEditorComponent } from './features/home/class-editor/class-editor.component';
import { StudentsDetailsComponent } from './features/home/students-details/students-details.component';
import { StudentsListComponent } from './features/home/students-list/students-list.component';
import { StudentsEditorComponent } from './features/home/students-editor/students-editor.component';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  { path: 'class', component:ClassesListComponent },
  { path: 'class/:id', component:ClassDetailsComponent },
  { path: 'class/edit/:id', component:ClassEditorComponent },
  { path: 'student', component:StudentsListComponent },
  { path: 'student/:id', component:StudentsDetailsComponent },
  { path: 'student/edit/:id', component:StudentsEditorComponent },
  { path:'**', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

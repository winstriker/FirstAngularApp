import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassDetailsComponent } from './class-details/class-details.component';
import { ClassesListComponent } from './classes-list/classes-list.component';

const routes: Routes = [
  { path: 'class/:id', component:ClassDetailsComponent },
  { path:'**', component:ClassesListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

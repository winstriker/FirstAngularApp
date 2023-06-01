import { Component } from '@angular/core';
import { Collections, ClassesRecord, ClassesResponse } from 'pocketbase-types';
import { pocketbaseInstance } from 'src/main';

@Component({
  selector: 'app-classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.css']
})

export class ClassesListComponent{
  classes: ClassesRecord[] = [];

  constructor(){
    this.loadClasses();
  }
  async loadClasses(): Promise<void> {
    this.classes = await pocketbaseInstance.collection(Collections.Classes).getFullList<ClassesResponse>()
  }

}
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Collections, ClassesRecord, ClassesResponse, StudentsRecord } from 'pocketbase-types';
import { pocketbaseInstance } from 'src/main';

@Component({
  selector: 'app-classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.css']
})

export class ClassesListComponent{
  classes: ClassesRecord[] = [];
  addClicked: boolean = false;

  name = new FormControl('', [Validators.required]);
  selectedStudents : StudentsRecord[] = [];
  allStudents : StudentsRecord[] = []

  selectedStudent : StudentsRecord = this.allStudents[0];

  constructor(){
    this.loadClasses();
  }
  async loadClasses(): Promise<void> {
    this.classes = await pocketbaseInstance.collection(Collections.Classes).getFullList<ClassesResponse>()
    this.allStudents = await pocketbaseInstance.collection(Collections.Students).getFullList()
    this.selectedStudent = this.allStudents[0];
  }

  addStudent(){
    if(this.selectedStudent == undefined){
      throw new Error("No student selected");
    }
    const index = this.allStudents.indexOf(this.selectedStudent, 0);
    if (index > -1) {
      this.allStudents.splice(index, 1);
    }
    this.selectedStudents.push(this.selectedStudent);
    this.selectedStudent = this.allStudents[0]
  }

  removeStudent(student: StudentsRecord){
    const index = this.selectedStudents.indexOf(student, 0);
    if (index > -1) {
      this.selectedStudents.splice(index, 1);
    }
    this.allStudents.push(student);
  }

  cancel(){
    this.selectedStudents.forEach(it => this.allStudents.push(it));
    this.selectedStudents = [];
    this.name.setValue('');
    this.addClicked = false;
  }

  async add(){
    this.classes.push(await pocketbaseInstance.collection(Collections.Classes).create<ClassesRecord>({ 'name' : this.name.value, 'students': this.selectedStudents.map(it => it.id)}))
    this.selectedStudents = [];
    this.name.setValue('');
    this.addClicked = false;
  }

  async deleteClass(_class : ClassesRecord){
    const index = this.classes.indexOf(_class, 0);
    if (index > -1) {
      this.classes.splice(index, 1);
    }
    await pocketbaseInstance.collection(Collections.Classes).delete(_class.id!!)
  }

  allIsValid(){
    return this.name.valid;
  }
}
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Collections, StudentsRecord } from 'pocketbase-types';
import { pocketbaseInstance } from 'src/main';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent {

  students : StudentsRecord[] = [];
  name = new FormControl('', [Validators.required]);
  surname = new FormControl('', [Validators.required]);
  birthDay = new FormControl('', [Validators.required]);
  addClicked : boolean = false;

  constructor(){
    this.loadStudents();
  }

  cancel(){
    this.name.setValue("");
    this.surname.setValue("")
    this.birthDay.setValue((new Date()).toISOString().trim())
    this.addClicked = false;
  }

  async add(){
    this.students.push(await pocketbaseInstance.collection(Collections.Students).create<StudentsRecord>({ 'name' : this.name.value, 'surname': this.surname.value, 'birthDate' : (new Date(this.birthDay.value!!)).toISOString()}))
    this.name.setValue("");
    this.surname.setValue("")
    this.birthDay.setValue((new Date()).toISOString().slice(0, -1))
    this.addClicked = false;
  }

  async deleteStudent(student : StudentsRecord){
    const index = this.students.indexOf(student, 0);
    if (index > -1) {
      this.students.splice(index, 1);
    }
    await pocketbaseInstance.collection(Collections.Students).delete(student.id!!)
  }

  async loadStudents(){
    this.students = await pocketbaseInstance.collection(Collections.Students).getFullList();
  }

  allIsValid(){
    return this.name.valid && this.surname.valid && this.birthDay.valid;
  }
}

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
    pocketbaseInstance.collection(Collections.Students).subscribe("*", e => {
      let mappedClass = this.students.map(it => it.id);
      if (e.action == "delete") {
        this.students.splice(mappedClass.indexOf(e.record.id, 0), 1)
      } else {

        let index = mappedClass.indexOf(e.record.id);
        if (index != -1) {
          this.students[index] = e.record;
        }
        else
          this.students.push(e.record)
      }

    })
  }

  cancel(){
    this.name.setValue("");
    this.surname.setValue("")
    this.birthDay.setValue((new Date()).toISOString().trim())
    this.addClicked = false;
  }

  async add(){
    await pocketbaseInstance.collection(Collections.Students).create<StudentsRecord>({ 'name' : this.name.value, 'surname': this.surname.value, 'birthDate' : (new Date(this.birthDay.value!!)).toISOString()})
    this.name.setValue("");
    this.surname.setValue("")
    this.birthDay.setValue((new Date()).toISOString().slice(0, -1))
    this.addClicked = false;
  }

  async deleteStudent(student : StudentsRecord){
    await pocketbaseInstance.collection(Collections.Students).delete(student.id!!)
  }

  async loadStudents(){
    this.students = await pocketbaseInstance.collection(Collections.Students).getFullList();
  }

  allIsValid(){
    return this.name.valid && this.surname.valid && this.birthDay.valid;
  }
}

import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Collections, ClassesRecord, ClassesResponse, StudentsRecord } from 'pocketbase-types';
import { pocketbaseInstance } from 'src/main';

@Component({
  selector: 'app-classes-list',
  templateUrl: './classes-list.component.html',
  styleUrls: ['./classes-list.component.css']
})

export class ClassesListComponent {
  classes: ClassesRecord[] = [];
  addClicked: boolean = false;

  name = new FormControl('', [Validators.required]);
  selectedStudents: StudentsRecord[] = [];
  allStudents: StudentsRecord[] = [];

  selectedStudent: StudentsRecord = this.allStudents[0];

  constructor() {
    this.loadClasses();
    pocketbaseInstance.collection(Collections.Classes).subscribe("*", e => {
      let mappedClass = this.classes.map(it => it.id);
      if (e.action == "delete") {
        this.classes.splice(mappedClass.indexOf(e.record.id, 0), 1)
      } else {

        let index = mappedClass.indexOf(e.record.id);
        if (index != -1) {
          this.classes[index] = e.record;
        }
        else
          this.classes.push(e.record)
      }

    })
  }
  async loadClasses(): Promise<void> {
    this.classes = await pocketbaseInstance.collection(Collections.Classes).getFullList<ClassesResponse>()
    this.allStudents = await pocketbaseInstance.collection(Collections.Students).getFullList()
    this.selectedStudent = this.allStudents[0];
  }

  addStudent() {
    if (this.selectedStudent == undefined) {
      throw new Error("No student selected");
    }
    const index = this.allStudents.indexOf(this.selectedStudent, 0);
    if (index > -1) {
      this.allStudents.splice(index, 1);
    }
    this.selectedStudents.push(this.selectedStudent);
    this.selectedStudent = this.allStudents[0]
  }

  removeStudent(student: StudentsRecord) {
    const index = this.selectedStudents.indexOf(student, 0);
    if (index > -1) {
      this.selectedStudents.splice(index, 1);
    }
    this.allStudents.push(student);
  }

  cancel() {
    this.selectedStudents.forEach(it => this.allStudents.push(it));
    this.selectedStudents = [];
    this.name.setValue('');
    this.addClicked = false;
  }

  async add() {
    await pocketbaseInstance.collection(Collections.Classes).create<ClassesRecord>({ 'name': this.name.value, 'students': this.selectedStudents.map(it => it.id) })
    this.selectedStudents = [];
    this.name.setValue('');
    this.addClicked = false;
  }

  async deleteClass(_class: ClassesRecord) {
    await pocketbaseInstance.collection(Collections.Classes).delete(_class.id!!)
  }

  allIsValid() {
    return this.name.valid;
  }
}
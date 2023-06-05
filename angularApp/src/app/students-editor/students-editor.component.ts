import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Collections, StudentsRecord } from 'pocketbase-types';
import { pocketbaseInstance } from 'src/main';

@Component({
  selector: 'app-students-editor',
  templateUrl: './students-editor.component.html',
  styleUrls: ['./students-editor.component.css']
})
export class StudentsEditorComponent {
  student: StudentsRecord | undefined;
  name = new FormControl('', [Validators.required]);
  surname = new FormControl('', [Validators.required]);
  birthDay = new FormControl('', [Validators.required]);

  constructor(private route: ActivatedRoute) {
    const studentId = this.route.snapshot.paramMap.get("id")
    if (studentId == null) {
      throw new Error("STUDENT IS NULL");
    }
    this.loadStudent(studentId)
  }

  async loadStudent(id: string) {
    this.student = await pocketbaseInstance.collection(Collections.Students).getOne(id);
    if (this.student == undefined || this.student == null)
      throw new Error("No student found with id " + id)
    this.name.setValue(this.student.name!!);
    this.surname.setValue(this.student.surname!!);
    let date = (new Date(this.student.birthDate!!));
    this.birthDay.setValue((date.toISOString()).slice(0, -1));
  }

  async save(){
    console.log(this.birthDay.value)
    await pocketbaseInstance.collection(Collections.Students).update(this.student?.id!!, { 'name' : this.name.value, 'surname' : this.surname.value, 'birthDate' : (new Date(this.birthDay.value!!)).toISOString()})
  }

  allIsValid(){
    return this.name.valid && this.surname.valid && this.birthDay.valid;
  }
}

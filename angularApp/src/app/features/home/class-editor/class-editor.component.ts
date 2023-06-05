import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClassesRecord, Collections, StudentsRecord } from 'pocketbase-types';
import { map } from 'rxjs';
import { pocketbaseInstance } from 'src/main';

@Component({
  selector: 'app-class-editor',
  templateUrl: './class-editor.component.html',
  styleUrls: ['./class-editor.component.css']
})
export class ClassEditorComponent {
  _class: ClassesRecord | undefined;
  students: StudentsRecord[] = [];
  studentsNotInClass: StudentsRecord[] = [];
  selectedStudent: StudentsRecord | undefined

  name = '';


  constructor(private route: ActivatedRoute) {
    const classId = this.route.snapshot.paramMap.get("id")
    if (classId == null) {
      throw new Error("CLASS IS NULL");
    }
    this.loadClass(classId)
  }

  async loadClass(classId: string): Promise<void> {
    this._class = await pocketbaseInstance.collection(Collections.Classes).getOne(classId, { expand: 'students' })
    if (this._class == undefined) {
      throw new Error("No class found with id " + classId);
    }
    this.name = this._class.name!!
    if (this._class.students == null) {
      throw new Error("CLASS HAS NO STUDENTS");
    }
    this.students = this._class.expand.students
    if(this.students == undefined || this.students == null)
      this.students = []
    this.studentsNotInClass = await pocketbaseInstance.collection(Collections.Students).getFullList();
    let students = this.students;
    this.studentsNotInClass = this.studentsNotInClass.filter(el => !students.map(it => it.id).includes(el.id))
    this.selectedStudent = this.studentsNotInClass[0]
  }

  removeStudent(student: StudentsRecord) {
    const index = this.students.indexOf(student, 0);
    if (index > -1) {
      this.students.splice(index, 1);
    }
    this.studentsNotInClass.push(student);
    if(this.selectedStudent == undefined)
      this.selectedStudent = this.studentsNotInClass[0]
  }

  addStudent(){
    if(this.selectedStudent == undefined){
      throw new Error("No student selected");
    }
    const index = this.studentsNotInClass.indexOf(this.selectedStudent, 0);
    if (index > -1) {
      this.studentsNotInClass.splice(index, 1);
    }
    this.students.push(this.selectedStudent);
    this.selectedStudent = this.studentsNotInClass[0]
  }
  async save(){
    if(this._class == undefined){throw new Error("Class is undefined")}
    await pocketbaseInstance.collection(Collections.Classes).update(this._class.id!!, { "name": this.name, "students": this.students.map(el => el.id)})
    
  }
}

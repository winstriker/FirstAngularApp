import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Collections, StudentsRecord } from 'pocketbase-types';
import { pocketbaseInstance } from 'src/main';

@Component({
  selector: 'app-students-details',
  templateUrl: './students-details.component.html',
  styleUrls: ['./students-details.component.css']
})
export class StudentsDetailsComponent {
  student : StudentsRecord | undefined

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
  }
  async deleteStudent(){
    await pocketbaseInstance.collection(Collections.Students).delete(this.student?.id!!)
  }
}

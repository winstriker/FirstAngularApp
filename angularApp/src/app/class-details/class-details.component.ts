import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsRecord } from 'pocketbase-types';
import { ClassesRecord, Collections } from 'pocketbase-types';
import { pocketbaseInstance } from 'src/main';

@Component({
  selector: 'app-class-details',
  templateUrl: './class-details.component.html',
  styleUrls: ['./class-details.component.css']
})
export class ClassDetailsComponent {

  name: string | undefined = "";
  students : StudentsRecord[] = [];

  constructor(private route:ActivatedRoute){
    const classId = this.route.snapshot.paramMap.get("id")
    if(classId == null){
      throw new Error("CLASS IS NULL");
    }
    this.loadClass(classId)
  }

  async loadClass(classId : string) : Promise<void>{
    const _class : ClassesRecord = await pocketbaseInstance.collection(Collections.Classes).getOne(classId, {expand: 'students'})
    if(_class.students == null){
      throw new Error("CLASS HAS NO STUDENTS");
    }
    this.name = _class.name
    this.students = _class.expand.students
  }
}

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

  
  _class: ClassesRecord | undefined;
  students : StudentsRecord[] = [];

  constructor(private route:ActivatedRoute){
    const classId = this.route.snapshot.paramMap.get("id")
    if(classId == null){
      throw new Error("CLASS IS NULL");
    }
    this.loadClass(classId)
  }

  async loadClass(classId : string) : Promise<void>{
    this._class = await pocketbaseInstance.collection(Collections.Classes).getOne(classId, {expand: 'students'})
    if(this._class == undefined){
      throw new Error("No class found with id " + classId);
    }
    if(this._class.students == null){
      throw new Error("CLASS HAS NO STUDENTS");
    }
    this.students = this._class.expand.students
  }

  async deleteClass(){
    await pocketbaseInstance.collection(Collections.Classes).delete(this._class?.id!!)
  }
}

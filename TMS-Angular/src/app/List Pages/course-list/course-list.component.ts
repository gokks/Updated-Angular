import { Component, OnInit } from '@angular/core';
import { CourseDTO } from 'src/app/Models/CourseDTO';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  constructor(private CourseService:CourseService) { }

  public data: CourseDTO[] = []
  ngOnInit(): void {
   this.getAllCourses()
  }
  getAllCourses(){
    this.CourseService.getAllCourses().
        subscribe(res => {
          console.log(res)
          this.data=res
        })
  }    
}

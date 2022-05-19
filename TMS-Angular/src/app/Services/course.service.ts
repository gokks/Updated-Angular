import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Course } from '../Models/Course';
import { CourseDTO } from '../Models/CourseDTO';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  // localurl: string;

  constructor(private http: HttpClient) { }

  baseurl = "https://localhost:7161/Course/"

  getAllCourses(): Observable<CourseDTO[]> {
    return this.http.get<CourseDTO[]>(this.baseurl + `GetAllCourses`)
  }
  
  gettopicdetailsbyid(id:number): Observable<Course[]> {
    return this.http.get<Course[]>(this.baseurl + `GetTopicById/${id}`)
  }

  postcourse(data:any):Observable<any>{
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<any>(this.baseurl + `Create`,data)
  }
  getAllUsersByRoleId(id: number): Observable<any> {
    return this.http.get<any>("https://localhost:7161/User/GetUsersByRole")
  }
  // constructor(private http: HttpClient) { }
  // baseurl = "http://localhost:4200/courselist"
  // getAllUsersByRoleId(id: number): Observable<CourseDTO[]> {
  //   return this.http.get<CourseDTO[]>(this.baseurl + `GetAllCourses/${id}`)
  // }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  baseurl = "https://localhost:7161/User/"
  getAllUsersByRoleId(id: number): Observable<UserService[]> {
    return this.http.get<UserService[]>(this.baseurl + `GetUsersByRole/${id}`)
  }
  postUser(data: any)
  {
    return this.http.post<any>(this.baseurl + 'User', data)
  }
}


// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {

//   constructor() { }
// }

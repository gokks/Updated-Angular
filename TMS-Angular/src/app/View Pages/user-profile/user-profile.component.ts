import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(
    private userService: UserService,
    private sanitizer: DomSanitizer
  ) {}
  data: any;
  base64String: any;
  ngOnInit(): void {
    this.getUserById();
  }
  getUserById() {
    this.userService.getUsersById(7).subscribe((res) => {
      console.log(res);
      this.data = res;
    });
  }
}
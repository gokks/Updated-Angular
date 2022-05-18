import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private userService: UserService) {}

  data:any;

  role = "Co-Ordinator";
  option = "Trainee";

  ngOnInit(): void {
      this.getUserByRole();
  }
  getUserByRole() {
    this.userService.getAllUsersByRoleId(3).subscribe((res) => {
      console.log(res);
      this.data = res
    });
  }
}
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from 'src/app/Models/department';
import { DepartmentService } from 'src/app/service/departmentlist.service';

@Component({
  selector: 'app-adddepartment',
  templateUrl: './adddepartment.component.html',
  styleUrls: ['./adddepartment.component.css']
})
export class AdddepartmentComponent implements OnInit {
role ="Co-Ordinator"

  constructor(private departmentservice:DepartmentService) { }
  public department:Department={
    id: 1,
    name:"",
    isDisabled: false
  }
  ngOnInit(): void {
    // this.setoption();
  }
  // setoption(form?:NgForm){
  //     if(this.department.id!=null){
  //       this.();
  //     }
  //   }
  OnSubmit(){
    this.departmentservice.postdepartment(this.department).subscribe(
      res=>{
        console.log(res)
        this.department=res
      }
    )
  }
}
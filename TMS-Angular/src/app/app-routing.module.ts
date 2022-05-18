import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentlistComponent } from './List Pages/departmentlist/departmentlist.component';
import { UserlistComponent } from './List Pages/userlist/userlist.component';
import { CommonhomeComponent } from './View Pages/commonhome/commonhome.component';
import { DashboardComponent } from './View Pages/dashboard/dashboard.component';
import { LoginComponent } from './View Pages/login/login.component';
import { UserhomeComponent } from './View Pages/userhome/userhome.component';

const routes: Routes = [
  { path: '', component: CommonhomeComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Home', component: UserhomeComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'Userlist', component: UserlistComponent },
  { path: 'Departmentlist', component: DepartmentlistComponent},
  { path: 'AddDepartment', component:DepartmentlistComponent},
  { path: 'courselist', component:UserlistComponent},
  // { path: 'coursefeedback', component:CoursefeedbackComponent},
  // { path: 'topiclist', component:TopiclistComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

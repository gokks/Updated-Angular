import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './Crud Pages/add-course/add-course.component';
import { AddUserComponent } from './Crud Pages/add-user/add-user.component';
import { AssignCourseComponent } from './Crud Pages/assign-course/assign-course.component';
import { ScheduleReviewComponent } from './Crud Pages/schedule-review/schedule-review.component';
import { UploadMOMComponent } from './Crud Pages/upload-mom/upload-mom.component';
import { AssignedReviewComponent } from './List Pages/assigned-review/assigned-review.component';
import { CancelledReviewComponent } from './List Pages/cancelled-review/cancelled-review.component';
import { CompletedReviewComponent } from './List Pages/completed-review/completed-review.component';
import { CourseListComponent } from './List Pages/course-list/course-list.component';
import { DepartmentlistComponent } from './List Pages/departmentlist/departmentlist.component';
import { TopicListComponent } from './List Pages/topic-list/topic-list.component';
import { UserlistComponent } from './List Pages/userlist/userlist.component';
import { CommonhomeComponent } from './View Pages/commonhome/commonhome.component';
import { DashboardComponent } from './View Pages/dashboard/dashboard.component';
import { LoginComponent } from './View Pages/login/login.component';
import { UserProfileComponent } from './View Pages/user-profile/user-profile.component';
import { UserhomeComponent } from './View Pages/userhome/userhome.component';
import { ViewMOMComponent } from './View Pages/view-mom/view-mom.component';

const routes: Routes = [
  { path: '', component: CommonhomeComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Home', component: UserhomeComponent },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'Userlist', component: UserlistComponent },
  { path: 'Departmentlist', component: DepartmentlistComponent },
  { path: 'AddDepartment', component:DepartmentlistComponent },
  { path: 'AddUser', component:AddUserComponent },
  { path: 'UserProfile', component:UserProfileComponent},
  { path: 'AddCourse', component:AddCourseComponent },
  { path: 'CourseList', component:CourseListComponent },
  { path: 'TopicList', component:TopicListComponent },
  { path: 'AssignCourse', component:AssignCourseComponent },
  { path: 'ScheduleReview', component:ScheduleReviewComponent },
  { path: 'CompletedReview', component:CompletedReviewComponent },
  { path: 'AssignedReview', component:AssignedReviewComponent },
  { path: 'CancelledReview', component:CancelledReviewComponent },
  { path: 'ViewMOM', component:ViewMOMComponent },
  { path: 'UploadMOM', component:UploadMOMComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CommonhomeComponent } from './View Pages/commonhome/commonhome.component';
import { DashboardComponent } from './View Pages/dashboard/dashboard.component';
import { UserhomeComponent } from './View Pages/userhome/userhome.component';
import { LoginComponent } from './View Pages/login/login.component';
import { UserlistComponent } from './List Pages/userlist/userlist.component';
import { DepartmentlistComponent } from './List Pages/departmentlist/departmentlist.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginationComponent } from './Components/pagination/pagination.component';
import { UserProfileComponent } from './View Pages/user-profile/user-profile.component';
import { AddCourseComponent } from './Crud Pages/add-course/add-course.component';
import { CompletedReviewComponent } from './List Pages/completed-review/completed-review.component';
import { CancelledReviewComponent } from './List Pages/cancelled-review/cancelled-review.component';
import { AssignedReviewComponent } from './List Pages/assigned-review/assigned-review.component';
import { ScheduleReviewComponent } from './Crud Pages/schedule-review/schedule-review.component';
import { ViewMOMComponent } from './View Pages/view-mom/view-mom.component';
import { UploadMOMComponent } from './Crud Pages/upload-mom/upload-mom.component';
import { CourseListComponent } from './List Pages/course-list/course-list.component';
import { TopicListComponent } from './List Pages/topic-list/topic-list.component';
import { AssignCourseComponent } from './Crud Pages/assign-course/assign-course.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    CommonhomeComponent,
    DashboardComponent,
    UserhomeComponent,
    LoginComponent,
    UserlistComponent,
    DepartmentlistComponent,
    PaginationComponent,
    UserProfileComponent,
    AddCourseComponent,
    CompletedReviewComponent,
    CancelledReviewComponent,
    AssignedReviewComponent,
    ScheduleReviewComponent,
    ViewMOMComponent,
    UploadMOMComponent,
    CourseListComponent,
    TopicListComponent,
    AssignCourseComponent,
  ],
  imports: [ BrowserModule,AppRoutingModule,FormsModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

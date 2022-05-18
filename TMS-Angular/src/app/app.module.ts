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
  ],
  imports: [ BrowserModule,AppRoutingModule,FormsModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminUsersContainerComponent } from './components/feature/admin-users-container/admin-users-container.component';
import { UserListComponent } from './components/ui/user-list/user-list.component';


@NgModule({
  declarations: [
    AdminComponent,
    HomeComponent,
    AdminUsersContainerComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

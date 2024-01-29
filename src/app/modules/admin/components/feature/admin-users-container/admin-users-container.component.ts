import { Component } from '@angular/core';
import { UsersService } from '../../../../../shared/users.service';
import { User } from '../../../../../models/User.model';

@Component({
  selector: 'app-admin-users-container',
  templateUrl: './admin-users-container.component.html',
  styleUrl: './admin-users-container.component.scss'
})
export class AdminUsersContainerComponent {
  constructor(private usersService: UsersService) {
    this.getUsers();
  }

  users!: User[];

  getUsers() {
    return this.usersService.getUsers().subscribe(users => this.users = users)
  }



}

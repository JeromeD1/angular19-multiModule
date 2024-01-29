import { Component, Input } from '@angular/core';
import { User } from '../../../../../models/User.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {

  @Input()
  users: User[] = [];
}

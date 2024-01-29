import { Component, Input } from '@angular/core';
import { User } from '../../../../../models/User.model';

@Component({
  selector: 'app-user-description',
  templateUrl: './user-description.component.html',
  styleUrl: './user-description.component.scss'
})
export class UserDescriptionComponent {

  @Input()
  user!: User;

}

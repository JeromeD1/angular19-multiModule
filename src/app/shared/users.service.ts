import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers() : Observable<User[]> {
    return this.http.get<User[]>('../../assets/users.json').pipe(
      map(users => users.map(user => new User(user.id, user.username, user.firstname,user.lastname, user.email))
      )
      )
      
  }

}

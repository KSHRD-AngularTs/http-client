import {Component, OnInit} from '@angular/core';
import {UserService} from './services/user.service';
import {User} from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users: User[] = [];

  constructor(private userService: UserService) {
    this.userService.getUsers()
      .subscribe((users) => {
        this.users = users;
      });
  }

}

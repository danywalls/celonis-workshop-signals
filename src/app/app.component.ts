import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UserComponent} from './letter/user.component';
import {User, UsersService} from './services/users.service';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'celonis-workshop-signals';
  userService = inject(UsersService)
  users$ = this.userService.users$;
  usersSelected : User[] = [];

  updateUsersSelected(user: User) {
    this.usersSelected.push(user);
  }
}

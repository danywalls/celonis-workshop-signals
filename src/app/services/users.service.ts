import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
export type User = {
  name: string;
  avatar: string;
  time: number;
}

@Injectable({providedIn: 'root'})
export class UsersService {

  http = inject(HttpClient);

  users$ = this.http.get<User[]>('https://67375400aafa2ef222336b4c.mockapi.io/users')

}

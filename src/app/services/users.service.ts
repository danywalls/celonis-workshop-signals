import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs';
export type User = {
  name: string;
}

@Injectable({providedIn: 'root'})
export class UsersService {

  http = inject(HttpClient);

  users$ = this.http.get<User[]>('https://fakestoreapi.com/users').pipe(
    // dont do it
    map((res: any[]) =>{
        return  res.map(user => ({

          name: `${user.name.firstname} ${user.name.lastname}`
        }))
      }
    )
  )

}

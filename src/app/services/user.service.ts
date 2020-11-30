import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../interfaces/user';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers = (): Observable<User[]> => {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        map((users: User[]) => {
          return users.map(user => new User(user));
        }),
        // catchError(this.handleError<User[]>('searchUsers', []))
      );
  }

}

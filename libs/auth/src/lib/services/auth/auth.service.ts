import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Authenticate, User } from '@nx-workspace/data-models';
import { throwError } from 'rxjs';
import { timer } from 'rxjs';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const BASE_URL = 'http://localhost:3000/users';
const HEADER = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) {
    const user = localStorage.getItem('nx-workspace-user');
    if (user) {
      this.userSubject.next(JSON.parse(user));
    }
  }

  public login(authenticate: Authenticate): Observable<User> {
    // return this.http.post<User>(`${BASE_URL}`, authenticate, HEADER).pipe(
    //   tap((user: User) => {
    //     console.log(user);

    //     localStorage.setItem('nx-workspace-user', JSON.stringify(user));
    //     return this.userSubject.next(user);
    //   })
    // );

    const { username, password } = authenticate;

    if (password !== 'password' || !username.trim()) {
      return throwError(new Error('Invalid username or password'));
    }

    return timer(750).pipe(
      map(() => {
        console.log(authenticate);
        const user = {
          username: authenticate.username,
          id: 1234,
          country: 'USA',
          token: 'TOKEN-1234',
          role: 'USER',
        };
        localStorage.setItem('nx-workspace-user', JSON.stringify(user));
        return user;
      })
    );
  }

  public logout() {
    localStorage.removeItem('nx-workspace-user');
    this.userSubject.next(null);
  }
}

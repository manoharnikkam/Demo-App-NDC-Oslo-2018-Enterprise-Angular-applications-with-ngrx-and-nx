import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Authenticate, User } from '@nx-workspace/data-models';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

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
    return this.http.post<User>(`${BASE_URL}`, authenticate, HEADER).pipe(
      tap((user: User) => {
        console.log(user);

        localStorage.setItem('nx-workspace-user', JSON.stringify(user));
        return this.userSubject.next(user);
      })
    );
  }

  public logout() {
    localStorage.removeItem('nx-workspace-user');
    this.userSubject.next(null);
  }
}

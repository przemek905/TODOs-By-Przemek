import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { User } from './user';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthenticationService {
    private authUrl = 'http://localhost:8080/login';
    private signUrl = 'http://localhost:8080/users/sign-up';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {
    }

    login(username: string, password: string): Observable<boolean> {
        return this.http.post(this.authUrl, JSON.stringify({username: username, password: password}), {headers: this.headers})
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.headers.get("Authorization");
                if (token) {
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            }).catch((error:any) => { console.log('asdasd');
              return Observable.throw(error.message || 'Server error');});
    }

    getToken(): String {
      var currentUser = JSON.parse(localStorage.getItem('currentUser'));
      var token = currentUser && currentUser.token;
      return token ? token : "";
    }

    isLoggedIn(): boolean {
      var token: String = this.getToken();
      return token && token.length > 0;
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    signup(user: User): Observable<User> {
      return this.http.post(this.signUrl, user)
          .map((response: Response) => {
            return new User(response.json());
          })
          .catch((error:any) => {
            return Observable.throw(error.message || 'Server error');})
    }
}

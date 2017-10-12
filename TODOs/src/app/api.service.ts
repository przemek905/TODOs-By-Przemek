import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

import { Http, Headers, Response } from '@angular/http';
import { Todo } from './todo';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { AuthenticationService } from './authentication.service';


const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  private headers = new Headers({
     'Content-Type': 'application/json',
     'Authorization': this.authenticationService.getToken()
     });

  constructor(
    private http: Http,
    private authenticationService: AuthenticationService
  ) {
  }

  public getAllTodos(): Observable<Todo[]> {
    return this.http
      .get(API_URL + '/todos?user=' + JSON.parse(localStorage.getItem('currentUser')).username, {headers: this.headers})
      .map(response => {
        const todos = response.json();
        let list : Todo[] = new Array<Todo>();
        for (let todo of todos) {
          list.push(new Todo(todo));
        }
        //return todos.map((todo) => new Todo(todo));
        return list;
      })
      .catch(this.handleError);
  }

  public createTodo(todo: Todo): Observable<Todo> {
    return this.http
      .post(API_URL + '/todos', todo, {headers: this.headers})
      .map(response => {
        return new Todo(response.json());
      })
      .catch(this.handleError);
  }

  public getTodoById(todoId: number): Observable<Todo> {
  return this.http
    .get(API_URL + '/todos/' + todoId, {headers: this.headers})
    .map(response => {
      return new Todo(response.json());
    })
    .catch(this.handleError);
}

public updateTodo(todo: Todo): Observable<Todo> {
return this.http
  .put(API_URL + '/todos/' + todo.id, todo, {headers: this.headers})
  .map(response => {
    return new Todo(response.json());
  })
  .catch(this.handleError);
}

public deleteTodoById(todoId: number): Observable<null> {
return this.http
  .delete(API_URL + '/todos/' + todoId, {headers: this.headers})
  .map(response => null)
  .catch(this.handleError);
}

  private handleError (error: Response | any) {
  console.error('ApiService::handleError', error);
  return Observable.throw(error);
}
}

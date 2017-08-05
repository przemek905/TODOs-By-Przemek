import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class TodoDataService {

    lastId: number = 0;

    todos: Todo[] = [];

    constructor(private api: ApiService) {
    }

    addTodo(todo: Todo): Observable<Todo> {
    return this.api.createTodo(todo);
    }

    deleteTodoById(todoId: number): Observable<Todo> {
    return this.api.deleteTodoById(todoId);
    }

    updateTodo(todo: Todo): Observable<Todo> {
    return this.api.updateTodo(todo);
    }

    getAllTodos(): Observable<Todo[]> {
    return this.api.getAllTodos();
    }

    getTodoById(todoId: number): Observable<Todo> {
    return this.api.getTodoById(todoId);
    }

    toggleTodoComplete(todo: Todo) {
    todo.complete = !todo.complete;
    return this.api.updateTodo(todo);
  }

}

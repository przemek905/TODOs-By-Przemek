import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../todo-data.service';
import { Todo } from '../todo';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoFilterService } from '../todo-filter.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers: [TodoDataService, TodoFilterService]
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];
  hideTodo: boolean = false;

  constructor(
    private router: Router,
    private todoDataService: TodoDataService,
    private todoFilterService: TodoFilterService
  ) {
  }

  public ngOnInit() {
    this.todoDataService
      .getAllTodos()
      .subscribe(
        (todos) => {
          this.todos = todos;
        },
        (error) => {
        this.router.navigate(['welcome']);
        console.error('An error occurred in todos component, navigating to login: ', error);

        }
      );
  }

  onAddTodo(todo) {
    this.todoDataService
      .addTodo(todo)
      .subscribe(
        (newTodo) => {
          this.todos = this.todos.concat(newTodo);
        }
      );
  }

  onToggleTodoComplete(todo) {
    this.todoDataService
      .toggleTodoComplete(todo)
      .subscribe(
        (updatedTodo) => {
          todo = updatedTodo;
        }
      );
  }

  onRemoveTodo(todo) {
    this.todoDataService
      .deleteTodoById(todo.id)
      .subscribe(
        (_) => {
          this.todos = this.todos.filter((t) => t.id !== todo.id);
        }
      );
  }

  onUpdateTodo(todo) {
    this.todoDataService
    .updateTodo(todo)
    .subscribe(
      (updatedTodo) => {
        todo = updatedTodo;
      }
    )
  }

}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent {

  @Input() todo: Todo;

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter();

  @Output()
  editTodo: EventEmitter<Todo> = new EventEmitter();

  'todo.title': string;

  // inputValue = (<HTMLInputElement>document.getElementById(name)).value;

  constructor() {
  }

  toggleTodoComplete(todo: Todo) {
    this.toggleComplete.emit(todo);
  }

  removeTodo(todo: Todo) {
    this.remove.emit(todo);
  }

  editTodoDoubleClick(todo: Todo) {
    this.editTodo.emit(todo);
    this.todo.title = this.todo.title;
    console.log('DoubleClick event todolist ITEM');
  }

}

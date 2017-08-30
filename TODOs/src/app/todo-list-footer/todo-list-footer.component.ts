import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list-footer',
  templateUrl: './todo-list-footer.component.html',
  styleUrls: ['./todo-list-footer.component.css']
})
export class TodoListFooterComponent {

  @Input()
  todos: Todo[];

  @Output()
  showActiveTodos: EventEmitter<Todo[]> = new EventEmitter();

  constructor() {
  }

  showActive(todos: Todo[]) {
    this.showActiveTodos.emit(todos);
    console.log('ACTIVE');
  }

}

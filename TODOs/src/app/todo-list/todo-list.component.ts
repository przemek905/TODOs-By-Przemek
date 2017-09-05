import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  @Input()
  todos: Todo[];

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter();

  @Output()
  editTodo: EventEmitter<Todo> = new EventEmitter();

  @Output()
  enableEditTodoDoubleClick: EventEmitter<Todo> = new EventEmitter();

  @Output()
  showActiveTodos: EventEmitter<Todo[]> = new EventEmitter();

  isHidden: boolean = false;

  constructor() {
    console.log('constructor');
  }

  onToggleTodoComplete(todo: Todo) {
    this.toggleComplete.emit(todo);
  }

  onRemoveTodo(todo: Todo) {
    this.remove.emit(todo);
  }

  onUpdateTodo(todo: Todo) {
    this.editTodo.emit(todo);
    console.log('ENTER event todo LIST');
  }

  onEnableEditingTodo(todo: Todo) {
    this.enableEditTodoDoubleClick.emit(todo);
    console.log('Double Click event todo LIST');
  }

  onShowActiveTodos(todos: Todo[]) {
    this.showActiveTodos.emit(todos);
    console.log('LIST');
  }

  showActive(todos: Todo[]) {
    this.showActiveTodos.emit(todos);
    console.log('LIST');
  }

}

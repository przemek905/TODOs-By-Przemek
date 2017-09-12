import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';
import { TodoFilterService, HidingTodos } from '../todo-filter.service';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

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

  @Output()
  enableEditTodoDoubleClick: EventEmitter<Todo> = new EventEmitter();

  @Output()
  showActiveTodos: EventEmitter<Todo[]> = new EventEmitter();

  'todo.title': string;

  isReadOnly: boolean = true;
  private state: HidingTodos = HidingTodos.All;

  constructor(private todoFilterService: TodoFilterService) {
  }

  public ngOnInit() {
    this.todoFilterService.hideTodosType.subscribe(value => this.state = value);
  }

  public isHidden(): boolean {
    if (this.state === HidingTodos.Active && !this.todo.complete) {
      return false;
    }
    else if (this.state === HidingTodos.Completed && this.todo.complete) {
      return false
    }
    else if (this.state === HidingTodos.All) {
      return false;
    }
    return true;
  }

  toggleTodoComplete(todo: Todo) {
    this.toggleComplete.emit(todo);
  }

  removeTodo(todo: Todo) {
    this.remove.emit(todo);
  }

  editTodoEnter(todo: Todo) {
    this.editTodo.emit(todo);
    this.todo.title = this.todo.title;
    this.isReadOnly = true;
    console.log('ENTER event todolist ITEM');
  }

  enableEditTodo(todo: Todo) {
      this.enableEditTodoDoubleClick.emit(todo);
      this.isReadOnly = false;
    console.log('DoubleClick event todolist ITEM');
  }

}

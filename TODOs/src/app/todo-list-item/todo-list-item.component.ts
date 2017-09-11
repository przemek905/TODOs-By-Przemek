import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';
import { TodoFilterService } from '../todo-filter.service';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css'],
  providers: [TodoFilterService]
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
  isHidden: boolean = false;
  // data1: Observable<boolean> = Observable.of(this.todoFilterService.isTodoHidden);

  data: Observable<boolean> = Observable.create(observer => {
    observer.next(this.todoFilterService.isTodoHidden);
  })

  constructor(private todoFilterService: TodoFilterService) {
    this.data.subscribe(value => console.log(value));
    console.log(this.data);

    // this.data1.subscribe(value => console.log(value));
    // console.log(this.data1);
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

  onShowActiveTodos(todos: Todo[]) {
    this.showActiveTodos.emit(todos);
    console.log('ITEM');
  }

  showActive(todos: Todo[]) {
    this.showActiveTodos.emit(todos);
    console.log('ITEM');
  }

}

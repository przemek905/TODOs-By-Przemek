import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';
import { TodoFilterService } from '../todo-filter.service';

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

  constructor(private todoFilterService:TodoFilterService) {
  }

  showActive(todos: Todo[]) {
    this.todoFilterService.updateHiddenFlag(true);
    console.log('ACTIVE From Footer');
  }

}

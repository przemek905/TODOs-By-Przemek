import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';
import { TodoFilterService, HidingTodos } from '../todo-filter.service';
import { TodoDataService } from '../todo-data.service';

@Component({
  selector: 'app-todo-list-footer',
  templateUrl: './todo-list-footer.component.html',
  styleUrls: ['./todo-list-footer.component.css']
})
export class TodoListFooterComponent {

  @Input()
  todos: Todo[];

  @Output()
  clear: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoDataService: TodoDataService, private todoFilterService:TodoFilterService) {
  }

  todoCount(): number {
    let num = 0;
    for(let todo of this.todos) {
      if(!todo.complete) {
        num++;
      }
    }
    return num;
  }

  showActive(todos: Todo[]) {
    this.todoFilterService.updateHiddenFlag(HidingTodos.Active);
    console.log('ACTIVE From Footer');
  }

  showAll(todos: Todo[]) {
    this.todoFilterService.updateHiddenFlag(HidingTodos.All);
    console.log('ALL From Footer');
  }

  showCompleted(todos: Todo[]) {
    this.todoFilterService.updateHiddenFlag(HidingTodos.Completed);
    console.log('Completed From Footer');
  }

  deleteCompleted(todos: Todo[]) {
    for (let todo of this.todos) {
      if (todo.complete) {
        this.clear.emit(todo);
      }
    }
  }

}

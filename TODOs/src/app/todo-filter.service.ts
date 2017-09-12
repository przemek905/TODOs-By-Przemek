import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class TodoFilterService {

  hideTodosType = new Subject<HidingTodos>();

  constructor() { }

  updateHiddenFlag(hideType: HidingTodos) {
    this.hideTodosType.next(hideType);
  }

}

  export enum HidingTodos {
    All,
    Active,
    Completed
  };

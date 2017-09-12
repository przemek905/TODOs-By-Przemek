import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class TodoFilterService {

  isTodoHidden = new Subject<boolean>();

  constructor() { }

  updateHiddenFlag(shouldHidden: boolean) {
    this.isTodoHidden.next(shouldHidden);
  }

}

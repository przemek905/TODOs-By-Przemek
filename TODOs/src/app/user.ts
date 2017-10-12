import { Todo } from './todo';

export class User {
  id: number;
  username: string = '';
  password: string = '';
  todos: Todo[];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

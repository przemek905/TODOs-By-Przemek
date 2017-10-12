export class Todo {
  id: number;
  title: string = '';
  complete: boolean = false;
  userName: string = JSON.parse(localStorage.getItem('currentUser')).username;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

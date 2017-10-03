import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoDataService } from './todo-data.service';
import { HttpModule } from '@angular/http';
import { TodoListHeaderComponent } from './todo-list-header/todo-list-header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { TodoListFooterComponent } from './todo-list-footer/todo-list-footer.component';
import { ApiService } from './api.service';
import { TodoFilterService } from './todo-filter.service';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { TodosComponent } from './todos/todos.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './authentication.service';
import { CanActivateAuthGuard } from './CanActivateAuthGuard';


const appRoutes: Routes = [
  {
    path: 'todos',
    component: TodosComponent,
    canActivate: [CanActivateAuthGuard]
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'logout',
    component: WelcomeComponent
  },
  { path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TodoListHeaderComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoListFooterComponent,
    WelcomeComponent,
    TodosComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TodoDataService, ApiService, TodoFilterService, AuthenticationService, CanActivateAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

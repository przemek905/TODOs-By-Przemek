import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Observable } from 'rxjs/Rx';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  model: any = {};
  user: User;
  error = '';

  private authUrl = 'http://localhost:8080/users/sign-up';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  signup() {
    this.user = new User({username: this.model.username, password: this.model.password});

    this.authenticationService.signup(this.user)
    .subscribe(user => {
        if (user.username) {
          alert("Registration successful done! You can login now.");
          this.router.navigate(['welcome']);
        } else {
            alert('Username or password is already exist');
        }
    }, error => {
      this.error = error;
    });
  }

}

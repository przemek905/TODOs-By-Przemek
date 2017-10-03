import { Component, OnInit } from '@angular/core';
import { Location }          from '@angular/common';
import { AuthenticationService } from './authentication.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {

  constructor(private location: Location, private authService: AuthenticationService) { }

  ngOnInit() {
  }

  goBack(): void {
  this.location.back();
  }

}

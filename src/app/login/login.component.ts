import {Component, OnInit} from '@angular/core';
import {Login} from './dto/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = new Login('', '');

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.login);
  }
}

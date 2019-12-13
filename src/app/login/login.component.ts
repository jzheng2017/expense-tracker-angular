import {Component, OnInit} from '@angular/core';
import {Login} from './dto/login';
import {UserService} from '../service/users/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = new Login('', '');

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.userService.login(this.login).subscribe(response => {
      localStorage.setItem('token', response.token);
    });
  }
}

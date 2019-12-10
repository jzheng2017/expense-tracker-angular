import {Component, OnInit} from '@angular/core';
import {Registration} from './dto/registration';
import {UserService} from '../service/users/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  registration = new Registration('', '', '', '', '', '');
  error = {};

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.registerUser();
  }

  registerUser() {
    this.userService.register(this.registration).subscribe(response => {
        console.log("success");
        // return localStorage.setItem('token', response.token);
      },
      error => {
        console.log(error);
      }
    );
  }
}

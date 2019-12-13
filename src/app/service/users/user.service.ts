import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Registration} from '../../registration/dto/registration';
import {ConfigService} from '../config/config.service';
import {Login} from '../../login/dto/login';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiBaseUrl = this.configService.apiBaseUrl;
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private httpClient: HttpClient, private configService: ConfigService) {
  }

  register(request: Registration) {
    const registrationUrl = `${this.apiBaseUrl}/users/add`;
    console.log(registrationUrl);
    console.log(request);
    return this.httpClient.post(registrationUrl, request, this.httpOptions);
  }

  login(request: Login){
    const loginUrl = `${this.apiBaseUrl}/authenticate`;
    return this.httpClient.post(loginUrl, request, this.httpOptions);
  }
}

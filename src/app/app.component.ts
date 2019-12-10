import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lifestyle Tracker';

  constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);
  }
}

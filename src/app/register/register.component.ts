import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AlertService } from '../_services/alert.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  url = 'http://localhost:8080/register/signUp';
  model: any = {};
  body: Object;
  constructor(
    private router: Router,
    private http: Http,
    private alertService: AlertService
  ) { }

  ngOnInit() {
  }
  register() {
    // this.http.get('http://localhost:8080/login/api/hi').subscribe(data => {
    //   console.log(data);
    // });
    if (!this.model.userName) {
      this.alertService.error('Please enter userName', false);
    } else {
      this.body = {
        'userName': this.model.userName,
        'userPassword': this.model.userPassword,
        'userEmail': this.model.userEmail,
        'activate': 0
      };
      this.http.post(this.url, this.body).subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        }
      );
    }
  }
}

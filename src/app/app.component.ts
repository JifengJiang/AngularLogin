import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) { }
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    // console.log(`Adding article title: ${title.value} and link ${link.value}`);
    // this.http.get('http://localhost:8181/login/api/hi').subscribe(data => {
    //   alert(data);
    // });
    this.http.get('http://localhost:8181/login/api/hi').subscribe(data => {
      console.log(data);
    });
    return false;
  }
}

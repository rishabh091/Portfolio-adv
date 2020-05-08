import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-component-contact',
  templateUrl: './component-contact.component.html',
  styleUrls: ['./component-contact.component.css']
})
export class ComponentContactComponent implements OnInit {

  data = {
    name: '',
    email: '',
    message: '',
    recieve: 'rishabhmalhotra091@gmail.com'
  };

  showAlert = false;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  //retrive data
  getName(event) {
    this.data.name = event.target.value;
  }
  getEmail(event) {
    this.data.email = event.target.value;
  }
  getMessage(event) {
    this.data.message = event.target.value;
  }

  //send form
  sendMessage() {
    const url = 'https://rishabh-dev-portfolio.herokuapp.com/mail';

    this.httpClient.post(url, this.data).subscribe((res: any) => {
      this.showAlert = true;
    });
  }

  resetAlert() {
    this.showAlert = false;
  }

}

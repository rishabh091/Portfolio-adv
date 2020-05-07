import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-component-home',
  templateUrl: './component-home.component.html',
  styleUrls: ['./component-home.component.css']
})
export class ComponentHomeComponent implements OnInit, AfterViewInit {

  about: any;
  skills: any;
  contact: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.about = document.getElementById('aboutId').offsetTop;
    this.skills = document.getElementById('skillsId').offsetTop;
    this.contact = document.getElementById('contactId').offsetTop;
  }

  scroll(event) {
    if(event === 'about') {
      this.scrollTo(this.about);
    }
    if(event === 'skills') {
      this.scrollTo(this.skills);
    }
    if(event === 'contact') {
      this.scrollTo(this.contact);
    }
  }

  scrollTo(value) {
    window.scrollTo(0, value);
  }

}

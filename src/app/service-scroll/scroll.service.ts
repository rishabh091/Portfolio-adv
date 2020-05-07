import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  about: any;
  skills: any;
  contact: any;

  constructor() { }

  set(about, skills, contact) {
    this.about = about;
    this.skills = skills;
    this.contact = contact;
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
    let current = window.pageYOffset;

    const interval = setInterval(() => {
      if(current >= value){
        clearInterval(interval);
      }
      else{
        current += 10;
        window.scrollTo(0, current);
      }
    }, 0.25);
  }
}

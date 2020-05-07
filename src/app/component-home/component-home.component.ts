import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ScrollService } from '../service-scroll/scroll.service';

@Component({
  selector: 'app-component-home',
  templateUrl: './component-home.component.html',
  styleUrls: ['./component-home.component.css']
})
export class ComponentHomeComponent implements OnInit, AfterViewInit {

  about: any;
  skills: any;
  contact: any;

  constructor(private scroll: ScrollService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.about = document.getElementById('aboutId').offsetTop;
    this.skills = document.getElementById('skillsId').offsetTop;
    this.contact = document.getElementById('contactId').offsetTop;

    this.scroll.set(this.about, this.skills, this.contact);
  }

}

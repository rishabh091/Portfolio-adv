import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../service-scroll/scroll.service';

@Component({
  selector: 'app-component-about',
  templateUrl: './component-about.component.html',
  styleUrls: ['./component-about.component.css']
})
export class ComponentAboutComponent implements OnInit {

  constructor(private scroll: ScrollService) { }

  ngOnInit() {
  }

  contact(value) {
    this.scroll.scroll(value);
  }

}

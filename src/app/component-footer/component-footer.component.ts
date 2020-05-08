import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../service-scroll/scroll.service';

@Component({
  selector: 'app-component-footer',
  templateUrl: './component-footer.component.html',
  styleUrls: ['./component-footer.component.css']
})
export class ComponentFooterComponent implements OnInit {

  service;

  constructor(private s: ScrollService) {
    this.service = s;
   }

  ngOnInit() {
  }

}

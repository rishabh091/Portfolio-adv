import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-navbar',
  templateUrl: './component-navbar.component.html',
  styleUrls: ['./component-navbar.component.css']
})
export class ComponentNavbarComponent implements OnInit {

  @Output() ev = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  sendData(link) {
    this.ev.emit(link);
  }

}

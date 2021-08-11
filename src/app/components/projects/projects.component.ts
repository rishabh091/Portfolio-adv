import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, AfterViewInit {

  contributions: number = 0
  numberOfProjects: number = 50

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.runNumberAnimation()
  }

  runNumberAnimation() {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 3000) {
        setInterval(() => {
          if (this.contributions < this.numberOfProjects) {
            this.contributions += 1
          }
          else {
            clearInterval()
          }
        }, 20)
      }
    })
  }
}

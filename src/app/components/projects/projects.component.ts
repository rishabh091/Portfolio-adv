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
    const elementOffset = document.getElementById('project-head').offsetTop
    this.runNumberAnimation(elementOffset)
  }

  runNumberAnimation(elementOffset: number) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > elementOffset - 300) {
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

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experience: string

  constructor() { }

  ngOnInit() {
    const joiningDate = new Date(2020, 7, 5)
    const currentDate = new Date()

    const utcCurrentDate = Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())
    const utcJoiningDate = Date.UTC(joiningDate.getFullYear(), joiningDate.getMonth(), joiningDate.getDate()) 

    const diffDays = Math.floor((utcCurrentDate - utcJoiningDate) / (1000 * 60 * 60 * 24))
    this.experience = Math.floor(diffDays / 365) + '+'
  }

}

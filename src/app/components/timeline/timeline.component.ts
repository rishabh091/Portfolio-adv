import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  timeline = [
    {
      startDate: '12/2022',
      isPresent: true,
      endDate: '',
      titles: ['Full Stack Developer'],
      company: 'PeopleGrove',
      link: 'https://www.peoplegrove.com/',
      points: [
        'Develop complete scalable features in a distributed environment consisting over 6 microservices.',
        'Resolve time sensitive bugs and make overall application more accessible (WCAG 2.0 Level AA completed, aiming for WCAG 2.0 Level AAA) for people with disabilities to streamline user experience.',
        'Optimise essential apis by streamlining blocking processes for a more polished experience.',
        'Create complex user facing, accessible components used by over 32+ universities.'
      ]
    },
    {
      startDate: '12/2021',
      isPresent: false,
      endDate: '12/2022',
      titles: ['Software Engineer'],
      company: 'JungleWorks',
      link: 'https://jungleworks.com/',
      points: [
        'Debugged and resolved complex problems in a time limited, fast-paced environment.',
        'Utilised strategic engineering procedures to maintain, improve and develop requested features using Node and SQL.',
        'Documented product workflow and applications for a more readable and maintainable codebase.',
      ]
    },
    {
      startDate: '08/2020',
      isPresent: false,
      endDate: '12/2021',
      titles: ['Software Engineer', 'Software Engineer Intern'],
      company: 'Felix Healthcare AI',
      link: 'https://felixhealthcare.ai/',
      points: [
        'Designed, developed and deployed software applications easing workflow and automating essential tasks with great accuracy using Django and Docker.',
        'Optimised time-consuming APIs to slice waiting time by 75 percent.',
        'Research patterns and visualise essential purchasing trends using big data technologies like Apache spark, Hadoop and Python.',
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

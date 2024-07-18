import { Component, Inject } from '@angular/core';
import { FullscreenService } from '../../service/fullscreen.service';
import { DOCUMENT } from '@angular/common';
import { SharedService } from '../../service/shared.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {


  isDarkMode=true;
  ngOnInit(): void {
    this.updateTheme();
    this.sharedService.sharedData$.subscribe(data => {
      this.isDarkMode = data;
    });
  
  }

  constructor(
    private themeService: FullscreenService,
    @Inject(DOCUMENT) private document: Document,private sharedService:SharedService
  ) {
   
  }
  private updateTheme() {
    const isDarkMode = this.themeService.isDarkModeEnabled();
    if (isDarkMode) {
      this.document.body.classList.add('dark');
    } else {
      this.document.body.classList.remove('dark');
    }
}



// skills = [
//   'Java',
//   'HTML',
//   'Angular',
//   'Spring',
//   'Spring Boot',
//   'CSS',
//   'JavaScript',
//   'TypeScript',
//   'SQL',
//   'Git'
// ];


skills = [
  { name: 'Java', level: 'Worked' },
  { name: 'Microservice', level: 'Worked' },
  { name: 'Angular', level: 'Worked' },
  { name: 'Spring', level: 'Worked' },
  { name: 'SpringBoot', level: 'Worked' },
  { name: 'JPA', level: 'Worked' },
  { name: 'Hibernate', level: 'Worked' },
  { name: 'MySQL', level: 'Worked' },
  { name: 'HTML', level: 'Worked' },
  { name: 'JSP', level: 'Worked' },
  { name: 'JAVAScript', level: 'Worked' },
  { name: 'CSS', level: 'Worked' },
  { name: 'SASS', level: 'Learning' },
  { name: 'Splunk', level: 'Learning' },
  { name: 'SonarQube', level: 'Learning' },  
  { name: 'Jenkins', level: 'Worked' },
  { name: 'JWT', level: 'Worked' },
  { name: 'Servlet', level: 'Worked' },
  { name: 'Github', level: 'Worked' },
  { name: 'SVN', level: 'Worked' }
];



}

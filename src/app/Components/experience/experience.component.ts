import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FullscreenService } from '../../service/fullscreen.service';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { SharedService } from '../../service/shared.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  interval: number = 0;

  isDarkMode=true;
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
    this.updateTheme();
    this.sharedService.sharedData$.subscribe(data => {
      this.isDarkMode = data;
    });
   }
  }

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
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




}

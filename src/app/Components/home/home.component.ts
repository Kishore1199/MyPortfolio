import { Component, Inject } from '@angular/core';
import { FullscreenService } from '../../service/fullscreen.service';
import { DOCUMENT } from '@angular/common';
import { SharedService } from '../../service/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

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


isVisible = false;
message = '';

showPopup(message: string) {
  this.message = message;
  this.isVisible = true;

  setTimeout(() => {
    this.isVisible = false;
  }, 1500);
}
}

import { Component, Inject } from '@angular/core';
import { FullscreenService } from '../../service/fullscreen.service';
import { DOCUMENT } from '@angular/common';
import { SharedService } from '../../service/shared.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  elem: any;
  constructor(private themeService: FullscreenService,@Inject(DOCUMENT) private document: any,
 private sharedService:SharedService) {
   this.elem = document.documentElement;
 
 }
 ngOnInit(): void {
     this.elem = document.documentElement;
     this.themeService.setTheme();
     this.setThemeButtonText();
     this.screentext='full';
 }
 
 
   isfullscreen:boolean=false;
   screentext!: string;
   fullscreen() {
     if(!document.fullscreenElement) {
       this.elem.requestFullscreen();
       this.screentext='exit';
     }
     else {
       document.exitFullscreen();
       this.screentext='full';
     }
   }
 
 
   isDarkMode: boolean = false;
   themeButtonText!: string;
   title = 'landing';
   toggleTheme() {
     this.themeService.toggleTheme();
     this.setThemeButtonText();
     this.sharedService.updateData(this.themeService.isDarkModeEnabled());
   }
   private setThemeButtonText() {
     this.themeButtonText = this.themeService.isDarkModeEnabled() ? 'Light Theme' : 'Dark Theme';
   }
 
 
   // private updateTheme() {
   //   const isDarkMode = this.themeService.isDarkModeEnabled();
   //   if (isDarkMode) {
   //     this.document.body.classList.add('dark-mode');
   //   } else {
   //     this.document.body.classList.remove('dark-mode');
   //   }
   // }
 
}

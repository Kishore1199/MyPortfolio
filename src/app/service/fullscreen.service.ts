// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class FullscreenService {

//   private darkModeEnabled = environment.production == true ? true : false;
//   constructor() { }

//   setTheme() {
//     const themeLink = document.querySelector('#theme-link');
//     const toggleBtn = document.querySelector("#toggle-btn");

//     console.log(toggleBtn?.textContent)
//     if (themeLink) {
//       themeLink.remove();
//     }

//     const linkElement = document.createElement('link');
//     linkElement.id = 'theme-link';
//     linkElement.rel = 'stylesheet';

 
//       if (this.darkModeEnabled) {
//         console.log("1")
//         linkElement.href = 'assets/css/dark-theme.css';

//       } else {
//         console.log("2")
//         linkElement.href = 'assets/css/light-theme.css';
//       }

//     document.head.appendChild(linkElement);
//   }
//   toggleTheme() {
//     this.darkModeEnabled = !this.darkModeEnabled;
//     this.setTheme();
//   }
//   isDarkModeEnabled(): boolean {
//     return this.darkModeEnabled;
//   }
// }

// export const environment = {
//   production: false,
//  };


import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FullscreenService {
  private darkModeEnabled = environment.production == true  ? true : false;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  setTheme() {
    if (this.document) {
      const themeLink = this.document.querySelector('#theme-link');
      const toggleBtn = this.document.querySelector("#toggle-btn");
      console.log(toggleBtn?.textContent)

      if (themeLink) {
        themeLink.remove();
      }

      const linkElement = this.document.createElement('link');
      linkElement.id = 'theme-link';
      linkElement.rel = 'stylesheet';

      if (this.darkModeEnabled) {
        console.log("1")
        linkElement.href = 'assets/css/dark-theme.css';
      } else {
        console.log("2")
        linkElement.href = 'assets/css/light-theme.css';
      }

      this.document.head.appendChild(linkElement);
    }
  }

  toggleTheme() {
    this.darkModeEnabled = !this.darkModeEnabled;
    this.setTheme();
  }

  isDarkModeEnabled(): boolean {
    return this.darkModeEnabled;
  }
}

export const environment = {
  production: false,
 };
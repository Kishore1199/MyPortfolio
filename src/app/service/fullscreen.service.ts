import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FullscreenService {

  private darkModeEnabled = environment.production == true ? true : false;
  constructor() { }

  setTheme() {
    const themeLink = document.querySelector('#theme-link');
    const toggleBtn = document.querySelector("#toggle-btn");

    console.log(toggleBtn?.textContent)
    if (themeLink) {
      themeLink.remove();
    }

    const linkElement = document.createElement('link');
    linkElement.id = 'theme-link';
    linkElement.rel = 'stylesheet';

 
      if (this.darkModeEnabled) {
        console.log("1")
        linkElement.href = 'assets/css/dark-theme.css';

      } else {
        console.log("2")
        linkElement.href = 'assets/css/light-theme.css';
      }

    document.head.appendChild(linkElement);
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
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public lang = localStorage.setItem('lang', 'en');



  public switchLanguage = 'en';

  getTheLang() {
    let getLang = localStorage.getItem('lang');
    alert(`the lang is: ${getLang}`);
    return getLang;
  }

  switchLang() {
    if (this.switchLanguage == 'en') {
      this.switchLanguage = 'it';

      localStorage.setItem('lang', 'it');

      return this.switchLanguage;
    }
    if (this.switchLanguage == 'it') {
      this.switchLanguage = 'en';

      localStorage.setItem('lang', 'en');

      return this.switchLanguage;
    }
  }

}
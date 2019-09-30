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
    localStorage.setItem('lang', 'en');
    console.log(localStorage.getItem('lang'));
    return this.switchLanguage == 'en';
  }

}
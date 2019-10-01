import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  public lang = localStorage.setItem('lang', 'en');

  ngOnInit() {
    document.onkeyup = (e) => {
      if (e.ctrlKey && e.altKey && e.key === 'c') {
        this.switchLang();
        console.log(this.switchLanguage);
      }
    };    
  }


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


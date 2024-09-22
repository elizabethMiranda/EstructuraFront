import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private linkTheme = document.querySelector('#theme');


  constructor() { 
    const url = localStorage.getItem('theme') || 'assets/css/colors/default.css';
  if (this.linkTheme) {
    this.linkTheme.setAttribute('href', url);
  }
  }

  changeTheme(theme: string) {
    const url = `assets/css/colors/${theme}.css`;
    if (this.linkTheme) {
      this.linkTheme.setAttribute('href', url);
    }
    //se guarda en el local storage
    localStorage.setItem('theme', url);
    this.checkCurrentTheme();
    //Cuando la aplicacion se carga debemos leer el url que tenemos en el localstorage y aplicar el tema
      //console.log(url);
    }

    checkCurrentTheme() {
      const links= document.querySelectorAll('.selector');
       links.forEach(elem => {
        elem.classList.remove('working');
        const btnTheme = elem.getAttribute('data-theme');
        const btnThemeUrl = `assets/css/colors/${btnTheme}.css`;
        const currentTheme = this.linkTheme ? this.linkTheme.getAttribute('href') : '';
        if (btnThemeUrl === currentTheme) {
          elem.classList.add('working');
        }
      });
      //console.log(links);
    }

  }

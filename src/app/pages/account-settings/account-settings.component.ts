import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {
  public linkTheme = document.querySelector('#theme');
  public links!: NodeListOf<Element>;

  ngOnInit(){
    this.links = document.querySelectorAll('.selector');
    this.checkCurrentTheme();
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
    this.links.forEach(elem => {
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

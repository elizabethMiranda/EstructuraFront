import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  public linkTheme = document.querySelector('#theme');

 //public dataTheme = localStorage.getItem('theme');
 ngOnInit(){
  const url = localStorage.getItem('theme') || 'assets/css/colors/default.css';
  //const url = `assets/css/colors/${theme}.css`;
  if (this.linkTheme) {
    this.linkTheme.setAttribute('href', url);
  }
  //se guarda en el local storage
  //localStorage.setItem('theme', url);
  //Cuando la aplicacion se carga debemos leer el url que tenemos en el localstorage y aplicar el tema
    //console.log(url);
 }
}

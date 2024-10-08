import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {
  //public linkTheme = document.querySelector('#theme');

  constructor(private settingsService: SettingsService) { }
  ngOnInit(){
    this.settingsService.checkCurrentTheme();
  }

changeTheme(theme: string) {
  this.settingsService.changeTheme(theme);
  //Cuando la aplicacion se carga debemos leer el url que tenemos en el localstorage y aplicar el tema
    //console.log(url);
  }

}

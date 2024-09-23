import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      titulo: 'Dashboard!!',
      iconos: 'mdi mdi-gauge',
      submenu: [
        {titulo: 'Main', url: '/dashboard'},
        {titulo: 'ProgressBar', url: '/progress'},
        {titulo: 'Gráficas', url: '/grafica1'},
        {titulo: 'promesas', url: '/promesas'},
        {titulo: 'rxjs', url: '/rxjs'},
      ]
    }
]
  constructor() { }
}

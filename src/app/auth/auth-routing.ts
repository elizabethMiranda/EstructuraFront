import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { NopagefoundComponent } from '../nopagefound/nopagefound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  /*En este componente estaran mis rutas protegidas*/
  /* -- Rutas publicas ----*/
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

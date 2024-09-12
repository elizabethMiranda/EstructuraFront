import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages/pages-routing';

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthRoutingModule } from './auth/auth-routing';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const routes: Routes = [

  { path: '**', component: NopagefoundComponent }

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

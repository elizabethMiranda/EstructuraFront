import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementadorComponent } from './incrementador/incrementador.component';



@NgModule({
  declarations: [
    IncrementadorComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CommonModule
  ]
})
export class ComponentsModule { }

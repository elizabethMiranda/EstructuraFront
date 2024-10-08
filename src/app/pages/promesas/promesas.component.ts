import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  ngOnInit(){
    this.getUsuarios().then(usuarios => console.log(usuarios));
  }

  getUsuarios(){

    const promesa = new Promise((resolve) => {
      fetch('https://reqres.in/api/users')
      .then(resp => resp.json())
      .then(body => console.log(body.data));
    });
    return promesa;

    /*
        fetch('https://reqres.in/api/users')
    .then(resp => {
      resp.json().then(body => console.log(body));
    });
    */
  

}
}
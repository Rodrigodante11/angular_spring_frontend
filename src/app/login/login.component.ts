import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username:string;
  password:string;
  loginErro: boolean = false;
  cadastrando: boolean = false

  constructor(private router: Router) {


  }

  onSubmit(){
    this.router.navigate(['/home'])
    console.log( this.username)
    console.log( this.password)
  }

  preparaCadastro(event){
    event.preventDefault(); // para pegar o evento de href e ignorar
    this.cadastrando = true
  }

  cancelaCadastro(){
    this.cadastrando = false;
  }

}

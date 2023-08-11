import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username:string;
  password:string;
  errors: string[] ;
  cadastrando: boolean = false
  mensagemSucesso : string

  constructor(private router: Router,  private authService: AuthService) {}

  onSubmit(){
    this.authService.tentarLogar(this.username, this.password)
      .subscribe( response => {
        console.log(response)
        this.router.navigate(['/home'])
    }, ErrorRespons => {
        this.errors = [ ' Usuario e/ou senha incorretos']
    })

  }

  preparaCadastro(event){
    event.preventDefault(); // para pegar o evento de href e ignorar
    this.cadastrando = true
  }

  cancelaCadastro(){
    this.cadastrando = false;
  }
  cadastrar(){
    console.log("teste aa")
    const usuario: Usuario =  new Usuario();
    usuario.username = this.username;
    usuario.password= this.password;
    this.authService
      .salvar(usuario)
      .subscribe( response => {
        this.mensagemSucesso = "Usuario cadastrado com sucesso efetue o Login"
        this.errors = [];
        this.cadastrando = false;
        this.username = '';
          this.password = '';
      }, errorResponse => {

        this.errors = errorResponse.error.errors
        this.mensagemSucesso = null;
      })
  }

}

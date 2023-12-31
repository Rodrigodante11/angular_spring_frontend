import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Usuario} from './login/usuario';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';
import { useAnimation } from "@angular/animations";

import { JwtHelperService } from '@auth0/angular-jwt'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: String = environment.apiURLBase + "/api/usuario";
  tokenURL: string = environment.apiURLBase + environment.obterTokenUrl;
  clienteID: string = environment.clientId;
  clientSecret: string = environment.clienteSecret ;
  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor( private http: HttpClient) {

  }

  obterToken(){
    const tokenString = localStorage.getItem('access_token')
    if( tokenString ){
      const token = JSON.parse(tokenString).access_token
      return token
    }
    return null;
  }
  isAuthenticated() : boolean {
    const token = this.obterToken();
    if(token){
      const expirated = this.jwtHelper.isTokenExpired(token); // retorna true se o token tiver expirado
      return  !expirated
    }
    return false;
  }

  encerrarSessao(){
    localStorage.removeItem('access_token')

  }

  getUsuarioAuthenticado(){
    const token = this.obterToken();
    if(token){
      const usuario = this.jwtHelper.decodeToken(token).user_name
      return usuario;
    }
    return null;
  }

  salvar(usuario: Usuario) : Observable<any>{
    return this.http.post<any>(`${this.apiUrl}`, usuario)
  }

  tentarLogar(usuername: string, password: string) :  Observable<any>{
    const params = new HttpParams()
                                    .set('username', usuername)
                                    .set('password', password)
                                    .set('grant_type', 'password')

    const headers = {
      'Authorization': 'Basic ' + btoa(`${this.clienteID}:${this.clientSecret}`),
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    return this.http.post(this.tokenURL, params.toString(), { headers: headers })
  }
}

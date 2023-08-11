import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Usuario} from './login/usuario';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';
import {useAnimation} from "@angular/animations";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: String = environment.apiURLBase + "/api/usuario";
  tokenURL: string = environment.apiURLBase + environment.obterTokenUrl;
  clienteID: string = environment.clientId;
  clientSecret: string = environment.clienteSecret ;

  constructor( private http: HttpClient) {

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

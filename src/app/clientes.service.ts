import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Cliente } from './clientes/cliente';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor( private http: HttpClient ) {

  }

  salvar( cliente: Cliente ): Observable<Cliente>{  // por ser asincrono , fica OBSERVANDO e esperando o retorno
    return this.http.post<Cliente>('http://localhost:8080/api/clientes' , cliente);
  }

  getClientes(): Cliente {
    const client =  new Cliente();
    client.nome = 'Rodrigo Augusto';
    client.cpf = '88888888888';
    return client;
  }
}

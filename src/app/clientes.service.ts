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

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>('http://localhost:8080/api/clientes/');
  }

  getClientesTeste(): Cliente[] {
    const cliente = new Cliente();
    cliente.id = 1 ;
    cliente.nome = 'Fulano';
    cliente.dataCadastro = '1/04/2020';
    cliente.cpf = '12345678910';
    return [cliente];
  }
}

import { Injectable } from '@angular/core';
import { Cliente } from './clientes/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() {}

  getClientes(): Cliente {
    const client =  new Cliente();
    client.nome = 'Rodrigo Augusto';
    client.cpf = '88888888888';
    return client;
  }
}

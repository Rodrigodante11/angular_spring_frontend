import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Cliente} from '../cliente';
import {ClientesService} from '../../clientes.service';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  success: boolean = false;
  errors: String[] ;
  id: number;

  constructor( private servise: ClientesService, private router: Router, private activatedRouter: ActivatedRoute) {
    this.cliente = new Cliente();

  }

  ngOnInit(): void {
     const params: Params = this.activatedRouter.params;
     if ( params && params.value && params.value.id){
       this.id = params.value.id;
       this.servise.getClientesById(this.id)
           .subscribe(
               response => this.cliente = response,
               );
     }
  }

  voltarParaListagem(){
    this.router.navigate(['/clientes-lista']);
  }

  onsubmit(){
    this.servise
      .salvar(this.cliente)
      .subscribe( response => {
        this.success = true;
        this.errors = null;
        this.cliente = response;

      }, errorResponse => {
        this.errors =  errorResponse.error.errors;
        this.success = false;

      });
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Cliente} from '../cliente';
import {ClientesService} from '../../clientes.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  success = false;
  errors: string[] ;
  id: number;

  constructor( private servise: ClientesService, private router: Router, private activatedRouter: ActivatedRoute) {
    this.cliente = new Cliente();

  }

  ngOnInit(): void {
     const params: Observable<Params> = this.activatedRouter.params;
     params.subscribe( urlParams => {
         this.id = urlParams.id;

         if ( this.id){
             this.servise
                 .getClientesById(this.id)
                 .subscribe(
                     response => this.cliente = response,
                 );
         }
     });
  }

  voltarParaListagem(){
    this.router.navigate(['/clientes-lista']);
  }

  onsubmit(){
      if (this.id){

          this.servise
              .atualizar(this.cliente)
              .subscribe( response => {
                  this.success = true;
                  this.errors = null;
              }, errorResponse => {
                  this.errors = [ 'Erro ao Atualizar o cliente!'];
                  }
              );
      }else{
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
}

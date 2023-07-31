import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';


@NgModule({
  declarations: [ClientesFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ClientesRoutingModule
  ], exports: [
    ClientesFormComponent
  ]
})
export class ClientesModule { }

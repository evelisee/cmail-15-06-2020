import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';
import { FormsModule } from '@angular/forms';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { CaixaDeEntradaRoutingModule } from './caixa-de-entrada.routing.module';
import {  HttpClientModule } from '@angular/common/http';
import { EmailService } from 'src/app/services/email.service';
import { FiltroPorAssuntoPipe } from './filtro-por-assunto.pipe';


@NgModule({
  declarations: [
    CaixaDeEntradaComponent,
    FiltroPorAssuntoPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedComponentsModule,
    FormsModule,
    CaixaDeEntradaRoutingModule
  ],
  providers: [
    EmailService
  ]
})
export class CaixaDeEntradaModule { }

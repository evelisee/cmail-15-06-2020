import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Email } from '../models/email';
import { map } from 'rxjs/operators';

@Injectable()
export class EmailService {

  api = 'http://localhost:3200/emails';
  cabecalho = new HttpHeaders({
    'Authorization': localStorage.getItem('TOKEN')
  });

  constructor(
    private http: HttpClient
  ) { }

  enviar({destinatario, assunto, conteudo}){
    const emailParaApi = {
      to: destinatario,
      subject: assunto,
      content: conteudo
    }

    return this.http
      .post(this.api, emailParaApi, {headers: this.cabecalho})
      .pipe<Email>(
        map(
          (emailApi: any) => {
            return new Email({
              destinatario: emailApi.to,
              assunto: emailApi.subject,
              conteudo: emailApi.content,
              dataDeEnvio: emailApi.createdAt
            })
          }
        )
      )
  }

  listar(){
    return this.http
    .get(this.api, {headers: this.cabecalho})
    .pipe<Email[]>(
      map(
        (response: any[]) => {
          return response.map(
              emailApi => new Email({
                destinatario: emailApi.to,
                assunto: emailApi.subject,
                conteudo: emailApi.content,
                dataDeEnvio: emailApi.createdAt
              })
            )
          }
      )
    )
  }

  
}

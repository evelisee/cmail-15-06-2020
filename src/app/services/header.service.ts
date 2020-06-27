import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  valorDoFiltro = new Subject<string>();

  constructor() { }

  atulizarTermoDeFiltro(novoValor: string) {
    this.valorDoFiltro.next(novoValor);
  } 
}

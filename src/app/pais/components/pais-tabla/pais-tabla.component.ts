import { Component, Input } from '@angular/core';

import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html'
})
export class PaisTablaComponent{

  //importamos de por pais todos los paises
  @Input() paises: Country[] = [];

  alphacode : string = 'pais.alpha2code';
  constructor( ){

  }



}

import { Component} from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li{
      cursor: pointer;
    }
  `]
})
export class PorPaisComponent {

  termino: string = '';
  
  hayError: boolean = false;

  paises: Country[] = [];

  paisesSugeridos: Country[] = [];

  mostrarSugerencias: boolean = false;

  constructor( private paisService: PaisService) { }

  buscar( termino: string ){

    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais( termino )
      .subscribe( ( paises ) => {

        this.paises = paises;

      }, (err) => {
        this.hayError = true;
        this.paises = [];
      });
  }

  sugerencias(termino: string){
    this.hayError = false;
    this.termino = termino

    this.mostrarSugerencias = true;

    //crear sugerencias.
    this.paisService.buscarPais( termino )
    .subscribe( paises => {
      if(paises.length > 0){
        this.paisesSugeridos = paises.splice(0,5);
      }
    }
    )
  }

  buscarSugerido( termino: string){
    this.buscar( termino )
  }
}

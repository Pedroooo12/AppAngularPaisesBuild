import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {

  subregions: string[] = [
    "Western Africa",
    "Eastern Asia",
    "Western Asia",
    "Caribbean",
    "Eastern Africa",
    "Polynesia",
    "Southeast Europe",
    "South-Eastern Asia",
    "Central America",
    "South America",
    "Northern Europe",
    "Southern Asia",
    "Australia and New Zealand",
    "Northern Africa",
    "Middle Africa",
    "Micronesia",
    "North America",
    "Southern Europe",
    "Southern Africa",
    "Central Asia",
    "Eastern Europe",
    "Western Europe",
    "Melanesia",
    "Central Europe"
  ];
  
  //regiones: string[] = ['eu', 'efta', 'caricom', 'pa', 'au','usan','eeu','al','asean','cais','cefta','nafta','saarc'];
  regionActiva: string = '';
  paises: Country[] = [];

  getclassCSS( region: string): string{
    return (region == this.regionActiva) ? 'btn btn-primary m-1':'btn btn-outline-primary m-1';
  }

  constructor( private paisService: PaisService) {
  }

  activarRegion( region:string ){
    this.regionActiva = region;
  }

  buscar( termino: string ){
    this.regionActiva = termino;

    this.paisService.buscarRegion( termino )
      .subscribe( ( paises ) => {
        this.paises = paises; 
        console.log(paises);
      });
  }
 
}

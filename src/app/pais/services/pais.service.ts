import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

//propiedades de las apis
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl = 'https://restcountries.com/v3.1/';

  constructor( private http: HttpClient) { }

  buscarPais( termino: string ): Observable<Country[]>{

    const url = `${this.apiUrl}/name/${termino}`;

    return this.http.get<Country[]>(url);
  }

  buscarCapital( termino: string ): Observable<Country[]>{

    const url = `${this.apiUrl}/capital/${termino}`;

    return this.http.get<Country[]>(url);
  }

  getPaisPorCodigo( id: string ): Observable<Country[]>{

    const url = `${this.apiUrl}/alpha/${id}`;

    return this.http.get<Country[]>(url);
  }

  buscarRegion( termino: string ): Observable<Country[]>{
    const url = `${this.apiUrl}/subregion/${termino}`;
    return this.http.get<Country[]>(url);
  }
 
}

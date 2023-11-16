import { Component, Output, EventEmitter, OnInit, Input} from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  termino: string = '';

  //se dispara una unica vez cuando el componente es creado.
  ngOnInit(): void {
    this.debouncer
    .pipe(
      //no hagas el suscribe hasta que el observable deje de emitir 
      //valores 300ms.
      debounceTime(300)
    )  
    .subscribe( valor =>{
      this.onDebounce.emit( valor );
    })
  } 


  buscar(){
    //emite el valor el cual va a ser enviado al html
    this.onEnter.emit(this.termino);

    this.debouncer.subscribe
  }

  teclaPresionada(){
    this.debouncer.next(this.termino);
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor() {

    this.regresaObservable().subscribe(
      numero => console.log('Subscripción', numero),
      error => console.error('Error en el obser', error),
      () => console.log('El observador termino!')
    );

    // this.regresaObservable().pipe( // Tuberia para hacer alguna tranformación en los datos
    //   retry(2)
    // ).subscribe(
    //   numero => console.log('Subscripción', numero),
    //   error => console.error('Error en el obser', error),
    //   () => console.log('El observador termino!')
    // );
  }

  ngOnInit() {
  }

  public regresaObservable(): Observable<any> {

    return new Observable( (observer: Subscriber<any>) => { // from rxjs -> reactive extensions

      let contador = 0;

      const intervalo = setInterval( () => {
        contador ++;


        const salida = {
          valor: contador
        };


        observer.next(salida); // Notifica que ha llegado algo

        if (contador === 3) {
          clearInterval(intervalo);
          observer.complete();
        }
        // if (contador === 2) {
        //   observer.error('Envio un error al observer');
        // }

      }, 1000);
    }).pipe(
      map( respuestas => {
        return respuestas.valor
      }),
      filter( (valor, index) => {
        //console.log('Filter', valor, index);

        if( (valor % 2) === 1 ) { // Numero impar
          return true;
        } else { // Numero para
          return false;
        }
        return true;
      })
    );
  }

}

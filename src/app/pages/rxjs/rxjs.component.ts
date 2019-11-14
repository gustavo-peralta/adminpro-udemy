import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor() {

    const obser = new Observable( observer => { // from rxjs -> reactive extensions

      let contador = 0;

      const intervalo = setInterval( () => {

        contador ++;
        observer.next(contador); // Notifica que ha llegado algo

        if (contador === 3) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (contador === 2) {
          //clearInterval(intervalo);
          observer.error('Envio un error al observer');
        }

      }, 1000);
    });

    obser.pipe( // Tuberia para hacer alguna tranformación en los datos
      retry(2)
    ).subscribe(
      numero => console.log('Subscripción', numero),
      error => console.error('Error en el obser', error),
      () => console.log('El observador termino!')
    );
  }

  ngOnInit() {
  }

}

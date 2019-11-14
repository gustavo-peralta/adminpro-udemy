import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    // promesa.then(
    //   () => console.log('Termino!'), // Then
    //   () => console.log('Error'), // Catch error
    // );

    this.contarTres().then(
      mensaje => console.log('Termino!', mensaje), // Then
    ).catch(
      error => console.error(`Error en la promesa ${error}`), // Catch error
    );

  }

  ngOnInit() {
  }

  contarTres(): Promise<boolean> {

    return new Promise<boolean>( (resolve, reject) => {
      let contador = 0;

      const intervalo = setInterval( () => {
        contador ++;
        console.log(contador);
        if(contador === 3) {
          resolve(true);
          //reject('Simplemente un error');
          clearInterval(intervalo);
        }
      }, 1000);
    });

  }

}

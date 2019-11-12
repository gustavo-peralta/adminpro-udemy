import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl : 'assets/css/colors/default.css',
    tema : 'default'
  };

  constructor( @Inject(DOCUMENT) private _document ) {
    this.cargarAjustes();
  }

  // Persistencia en el local storage
  guardarAjustes() {
    //console.log('Guardado en el localStorage');
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes) );
  }

  cargarAjustes() {
    if (localStorage.getItem('ajustes') ) {
      //console.log('Carga de los ajustes desde localStorage');
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));

      this.aplicarTema( this.ajustes.tema );
    } else {
      console.log('Usando valores por defecto');

      this.aplicarTema( this.ajustes.tema );
    }
  }

  aplicarTema(tema: string){
    const url = `assets/css/colors/${tema}.css`;
    this._document.getElementById('tema').setAttribute('href', url);

    this.ajustes.temaUrl = url;
    this.ajustes.tema = tema;

    this.guardarAjustes();
  }
}

// Datos por defecto
interface Ajustes{
  temaUrl: string;
  tema: string;
}

import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {
    console.log('Servicio Usuario Listo');
  }

  crearUsuario( usuario: Usuario){
    let url = URL_SERVICIOS + '/usuarios';

    return this.http.post(url, usuario)
                    .pipe(
                      map( (resp: any) => {
                        window.alert('Usuario Creado correctamente');
                        return resp.usuario; })
                    );
  }
}

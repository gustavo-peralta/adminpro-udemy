import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { UsuarioService } from '../services/services.index';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';

declare function init_plugins();
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(public _usuarioService: UsuarioService,
              public router: Router) {

   }

  validacionPersonalizada( campo1: string, campo2: string ): ValidatorFn{

    return (currentControl: AbstractControl): { [key: string]: any }  => {
      let pass1 = currentControl.value.password;
      let pass2 = currentControl.value.password2;

      if(pass1 === pass2) return null;

      return {
        sonIguales : true
      };
    }

  }

  ngOnInit() {
    init_plugins();

    this.form = new FormGroup({
      nombre: new FormControl( null, Validators.required),
      email: new FormControl( null, [Validators.required, Validators.email] ),
      password: new FormControl( null, Validators.required ),
      password2: new FormControl( null, Validators.required ),
      condiciones: new FormControl( false )
    }, { validators: this.validacionPersonalizada( 'password', 'password2' ) });

    // this.form.setValue({
    //   nombre: 'Ejemplo',
    //   email: 'pepe@pepe.es',
    //   password: '123',
    //   password2: '333',
    //   condiciones: true
    // });
  }

  registrarUsuario(){

    if(this.form.invalid){
      return;
    }

    if( !this.form.value.condiciones ){
      console.log('Debe aceptar las condiciones, aqui mostraria una alerta');
      window.alert('Debe aceptar las condiciones');
      return;
    }

    console.log(this.form.value);

    let usuario = new Usuario(
      this.form.value.nombre,
      this.form.value.email,
      this.form.value.password
    );

    this._usuarioService.crearUsuario(usuario)
      .subscribe(res => console.log('asd') );
  }


}

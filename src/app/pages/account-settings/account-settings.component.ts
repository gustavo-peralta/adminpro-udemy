import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/services.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  constructor( public _ajustes: SettingsService) { }

  ngOnInit() {
    this.activarCheck(this._ajustes.ajustes.tema);
  }

  cambiarColor(tema: string, link: any) {
    //console.log(tema);

    this.aplicarCheck(link);
    this._ajustes.aplicarTema(tema);
  }

  aplicarCheck(link: any) {
    const selectores: any = document.getElementsByClassName('selector');

    for( const selector of selectores) {
      selector.classList.remove('working');
    }

    link.classList.add('working');
  }

  activarCheck(tema: string) {
    // const selectors: any = document.getElementsByClassName(`selector`);
    const selector: any = document.getElementsByClassName(`selector ${tema}-theme`);

    // console.log(selectors);
    //console.log(selector);

    // for (const htmlRef of selectors) {
    //   if (htmlRef === tema) {
    //     htmlRef.classList.add('working');
    //     break;
    //   }
    // }

    selector[0].classList.add('working');
  }
}

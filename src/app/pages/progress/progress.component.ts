import { Component, OnInit } from '@angular/core';
import {IncrementadorComponent} from '../../componets/incrementador/incrementador.component';
@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progreso1: number = 20;
  progreso2: number = 30;

  constructor() { }

  ngOnInit() {
  }

  actualizar(event: number) {
    console.log(event);
  }

}

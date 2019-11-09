import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component ({
    selector: 'app-grafico-donut',
    templateUrl: './graficoDonut.component.html'
})
export class GraficoDonutComponent implements OnInit {

    @Input() leyenda: EventEmitter<string>  = new EventEmitter();
    @Input() data: EventEmitter<number[]> = new EventEmitter();
    @Input() labels: EventEmitter<string[]> = new EventEmitter();
    @Input() chartType: EventEmitter<string> = new EventEmitter();

    constructor() {}

    ngOnInit() {
    }

}
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlterationModel } from '../../models/alteration.model';
import { faMinus, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-alteration-row',
    templateUrl: './alteration-row.component.html',
    styleUrls: ['./alteration-row.component.scss'],
})
export class AlterationRowComponent implements OnInit {
    @Input() alteration: Pick<AlterationModel, 'value' | 'type' | 'property'>;
    @Input() fontSize = 1;
    @Input() removable = false;
    @Output() removeClicked = new EventEmitter<void>();

    faPlus = faPlus;
    faMinus = faMinus;
    faTimes = faTimes;

    constructor() {}

    ngOnInit(): void {}
}

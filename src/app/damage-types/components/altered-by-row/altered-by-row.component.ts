import { Component, Input, OnInit } from '@angular/core';
import { DamageTypeAlterationModel } from '../../models/damage-type-alteration.model';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-altered-by-row',
    templateUrl: './altered-by-row.component.html',
    styleUrls: ['./altered-by-row.component.scss'],
})
export class AlteredByRowComponent implements OnInit {
    @Input() alteration: DamageTypeAlterationModel;
    @Input() fontSize = 1;

    faPlus = faPlus;
    faMinus = faMinus;

    constructor() {}

    ngOnInit(): void {}
}

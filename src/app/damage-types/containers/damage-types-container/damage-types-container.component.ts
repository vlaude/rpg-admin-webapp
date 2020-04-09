import { Component, OnInit } from '@angular/core';
import { DamageTypeApi } from '../../api/damage-type.api';
import { DamageTypeModel } from '../../models/damage-type.model';

@Component({
    selector: 'app-damage-types-container',
    templateUrl: './damage-types-container.component.html',
    styleUrls: ['./damage-types-container.component.scss'],
})
export class DamageTypesContainerComponent implements OnInit {
    damageTypes: DamageTypeModel[];

    constructor(private damageTypeApi: DamageTypeApi) {}

    ngOnInit(): void {
        this.damageTypeApi.getAll().subscribe(damageTypes => {
            this.damageTypes = damageTypes;
            console.log(this.damageTypes);
        });
    }
}

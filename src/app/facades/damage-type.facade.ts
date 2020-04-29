import { DamageTypeState } from '../state/damage-type.state';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DamageTypeModel } from '../damage-types/models/damage-type.model';

@Injectable({ providedIn: 'root' })
export class DamageTypeFacade {
    constructor(private readonly state: DamageTypeState) {}

    getDamageTypes$(): Observable<DamageTypeModel[]> {
        return this.state.getDamageTypes$();
    }

    getDamageTypes(): DamageTypeModel[] {
        return this.state.damageTypesValue;
    }

    addDamageType(damageType: Omit<DamageTypeModel, 'id'>) {
        const damageTypes = this.state.damageTypesValue;
        // Make fake id
        const damageTypeIds = damageTypes.map(dt => Number(dt.id));
        const id = damageTypeIds?.length <= 0 ? '1' : '' + Number(Math.max(...damageTypeIds) + 1);
        const newDamageType: DamageTypeModel = {
            id,
            ...damageType,
        };
        this.state.setDamageTypes([newDamageType, ...damageTypes]);
    }
}

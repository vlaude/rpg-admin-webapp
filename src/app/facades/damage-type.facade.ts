import { DamageTypeState } from '../state/damage-type.state';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DamageTypeModel } from '../damage-types/models/damage-type.model';
import { AttributeState } from '../state/attribute.state';

@Injectable({ providedIn: 'root' })
export class DamageTypeFacade {
    constructor(private readonly damageTypeState: DamageTypeState, private readonly attributeState: AttributeState) {}

    getDamageTypes$(): Observable<DamageTypeModel[]> {
        return this.damageTypeState.getDamageTypes$();
    }

    getDamageTypesWithAlterations$(): Observable<DamageTypeModel[]> {
        const damageTypes = this.damageTypeState.damageTypesValue;
        const attributes = this.attributeState.attributesValue;
        damageTypes.map(dt => {
            dt.alterations = [];

            attributes.forEach(att => {
                att.alterations.forEach(alt => {
                    if (alt.type === 'DamageType' && alt.property === dt.name) {
                        dt.alterations.push({
                            attribute: {
                                name: att.name,
                                isPowerSource: att.isPowerSource,
                                isVitalitySource: att.isVitalitySource,
                            },
                            value: alt.value,
                        });
                    }
                });
            });

            return dt;
        });

        return of(damageTypes);
    }

    getDamageTypes(): DamageTypeModel[] {
        return this.damageTypeState.damageTypesValue;
    }

    addDamageType(damageType: Omit<DamageTypeModel, 'id'>) {
        const damageTypes = this.damageTypeState.damageTypesValue;
        // Make fake id
        const damageTypeIds = damageTypes.map(dt => Number(dt.id));
        const id = damageTypeIds?.length <= 0 ? '1' : '' + Number(Math.max(...damageTypeIds) + 1);
        const newDamageType: DamageTypeModel = {
            id,
            ...damageType,
        };
        this.damageTypeState.setDamageTypes([newDamageType, ...damageTypes]);
    }
}

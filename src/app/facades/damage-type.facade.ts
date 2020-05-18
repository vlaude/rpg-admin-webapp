import { DamageTypeState } from '../state/damage-type.state';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DamageTypeModel } from '../damage-types/models/damage-type.model';
import { AttributeState } from '../state/attribute.state';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DamageTypeFacade {
    constructor(private readonly damageTypeState: DamageTypeState, private readonly attributeState: AttributeState) {}

    getDamageTypes$(): Observable<DamageTypeModel[]> {
        return this.damageTypeState.getDamageTypes$();
    }

    /**
     * Return all the damage types build with their alterations provided by the attributes.
     */
    getDamageTypesWithAlterations$(): Observable<DamageTypeModel[]> {
        const attributes = this.attributeState.attributesValue;

        return this.damageTypeState.getDamageTypes$().pipe(
            map(damageTypes => {
                return damageTypes.map(dt => {
                    dt.attributesAffected = dt.attributesAffected.map(attAffected =>
                        attributes.find(att => att.id === attAffected.id)
                    );
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
            })
        );
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

    updateDamageType(damageType: DamageTypeModel) {
        const damageTypes = this.damageTypeState.damageTypesValue;
        const index = damageTypes.findIndex(dt => dt.id === damageType.id);
        let damageTypeToUpdate = damageTypes[index];
        damageTypeToUpdate = {
            ...damageTypeToUpdate,
            ...damageType,
        };
        damageTypes[index] = damageTypeToUpdate;
        this.damageTypeState.setDamageTypes(damageTypes);
    }

    deleteDamageType(damageType: DamageTypeModel) {
        const damageTypes = this.damageTypeState.damageTypesValue;
        const index = damageTypes.findIndex(dt => dt.id === damageType.id);
        damageTypes.splice(index, 1);
        this.damageTypeState.setDamageTypes(damageTypes);
    }
}

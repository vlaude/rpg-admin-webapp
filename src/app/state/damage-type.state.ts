import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DamageTypeModel } from '../damage-types/models/damage-type.model';

@Injectable({ providedIn: 'root' })
export class DamageTypeState {
    damageTypes$: BehaviorSubject<DamageTypeModel[]>;

    constructor() {
        this.damageTypes$ = new BehaviorSubject<DamageTypeModel[]>(
            JSON.parse(localStorage.getItem('damageTypes')) || []
        );
    }

    getDamageTypes$(): Observable<DamageTypeModel[]> {
        return this.damageTypes$.asObservable();
    }

    get damageTypesValue(): DamageTypeModel[] {
        return this.damageTypes$.value;
    }

    setDamageTypes(damageTypes: DamageTypeModel[]): void {
        this.damageTypes$.next(damageTypes);
        localStorage.setItem('damageTypes', JSON.stringify(damageTypes));
    }
}

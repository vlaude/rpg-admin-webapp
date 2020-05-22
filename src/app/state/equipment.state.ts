import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { EquipmentPositionModel } from '../equipment/models/equipment-position.model';

@Injectable({
    providedIn: 'root',
})
export class EquipmentState {
    equipmentPositions$: BehaviorSubject<EquipmentPositionModel[]>;

    constructor() {
        this.equipmentPositions$ = new BehaviorSubject<EquipmentPositionModel[]>(
            JSON.parse(sessionStorage.getItem('equipmentPositions')) || []
        );
    }

    getEquipmentPositions$(): Observable<EquipmentPositionModel[]> {
        return this.equipmentPositions$.asObservable();
    }

    get equipmentPositionsValue(): EquipmentPositionModel[] {
        return this.equipmentPositions$.value;
    }

    setEquipmentPositions(equipmentPositions: EquipmentPositionModel[]): void {
        this.equipmentPositions$.next(equipmentPositions);
        sessionStorage.setItem('equipmentPositions', JSON.stringify(equipmentPositions));
    }
}

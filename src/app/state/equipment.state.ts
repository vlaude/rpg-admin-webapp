import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { EquipmentPositionModel } from '../equipment/models/equipment-position.model';
import { EquipmentQualityModel } from '../equipment/models/equipment-quality.model';

@Injectable({
    providedIn: 'root',
})
export class EquipmentState {
    equipmentPositions$: BehaviorSubject<EquipmentPositionModel[]>;
    equipmentQualities$: BehaviorSubject<EquipmentQualityModel[]>;

    constructor() {
        this.equipmentPositions$ = new BehaviorSubject<EquipmentPositionModel[]>(
            JSON.parse(localStorage.getItem('equipmentPositions')) || []
        );
        this.equipmentQualities$ = new BehaviorSubject<EquipmentQualityModel[]>(
            JSON.parse(localStorage.getItem('equipmentQualities')) || []
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
        localStorage.setItem('equipmentPositions', JSON.stringify(equipmentPositions));
    }

    getEquipmentQualities$(): Observable<EquipmentQualityModel[]> {
        return this.equipmentQualities$.asObservable();
    }

    get equipmentQualitiesValue(): EquipmentQualityModel[] {
        return this.equipmentQualities$.value;
    }

    setEquipmentQualities(equipmentQualities: EquipmentQualityModel[]): void {
        this.equipmentQualities$.next(equipmentQualities);
        localStorage.setItem('equipmentQualities', JSON.stringify(equipmentQualities));
    }
}

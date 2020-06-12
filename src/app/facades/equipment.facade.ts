import { Injectable } from '@angular/core';
import { EquipmentState } from '../state/equipment.state';
import { Observable } from 'rxjs';
import { EquipmentPositionModel } from '../equipment/models/equipment-position.model';
import { EquipmentQualityModel } from '../equipment/models/equipment-quality.model';

@Injectable({ providedIn: 'root' })
export class EquipmentFacade {
    constructor(private readonly state: EquipmentState) {}

    getEquipmentPositions$(): Observable<EquipmentPositionModel[]> {
        return this.state.getEquipmentPositions$();
    }

    getEquipmentPositions(): EquipmentPositionModel[] {
        return this.state.equipmentPositionsValue;
    }

    addEquipmentPosition(equipmentPosition: Omit<EquipmentPositionModel, 'id'>) {
        const equipmentPositions = this.state.equipmentPositionsValue;
        // Make fake id
        const equipmentPositionIds = equipmentPositions.map(ep => Number(ep.id));
        const id = equipmentPositionIds?.length <= 0 ? '1' : '' + Number(Math.max(...equipmentPositionIds) + 1);
        const newEquipmentPosition: EquipmentPositionModel = {
            id,
            ...equipmentPosition,
        };
        this.state.setEquipmentPositions([newEquipmentPosition, ...equipmentPositions]);
    }

    updateEquipmentPosition(equipmentPosition: EquipmentPositionModel) {
        const equipmentPositions = this.state.equipmentPositionsValue;
        const index = equipmentPositions.findIndex(ep => ep.id === equipmentPosition.id);
        let equipmentPositionToUpdate = equipmentPositions[index];
        equipmentPositionToUpdate = {
            ...equipmentPositionToUpdate,
            ...equipmentPosition,
        };
        equipmentPositions[index] = equipmentPositionToUpdate;
        this.state.setEquipmentPositions(equipmentPositions);
    }

    deleteEquipmentPosition(equipmentPosition: EquipmentPositionModel) {
        const equipmentPositions = this.state.equipmentPositionsValue;
        const index = equipmentPositions.findIndex(ep => ep.id === equipmentPosition.id);
        equipmentPositions.splice(index, 1);
        this.state.setEquipmentPositions(equipmentPositions);
    }

    getEquipmentQualities$(): Observable<EquipmentQualityModel[]> {
        return this.state.getEquipmentQualities$();
    }

    getEquipmentQualities(): EquipmentQualityModel[] {
        return this.state.equipmentQualitiesValue;
    }

    addEquipmentQuality(equipmentQuality: Omit<EquipmentQualityModel, 'id'>) {
        const equipmentQualities = this.state.equipmentQualitiesValue;
        // Make fake id
        const equipmentQualityIds = equipmentQualities.map(ep => Number(ep.id));
        const id = equipmentQualityIds?.length <= 0 ? '1' : '' + Number(Math.max(...equipmentQualityIds) + 1);
        const newEquipmentQuality: EquipmentQualityModel = {
            id,
            ...equipmentQuality,
        };
        this.state.setEquipmentQualities([newEquipmentQuality, ...equipmentQualities]);
    }

    updateEquipmentQuality(equipmentQuality: EquipmentQualityModel) {
        const equipmentQualities = this.state.equipmentQualitiesValue;
        const index = equipmentQualities.findIndex(eq => eq.id === equipmentQuality.id);
        let equipmentQualityToUpdate = equipmentQualities[index];
        equipmentQualityToUpdate = {
            ...equipmentQualityToUpdate,
            ...equipmentQuality,
        };
        equipmentQualities[index] = equipmentQualityToUpdate;
        this.state.setEquipmentQualities(equipmentQualities);
    }

    deleteEquipmentQuality(equipmentQuality: EquipmentQualityModel) {
        const equipmentQualities = this.state.equipmentQualitiesValue;
        const index = equipmentQualities.findIndex(eq => eq.id === equipmentQuality.id);
        equipmentQualities.splice(index, 1);
        this.state.setEquipmentQualities(equipmentQualities);
    }
}

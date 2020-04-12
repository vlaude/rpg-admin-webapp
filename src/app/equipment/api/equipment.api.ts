import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EquipmentDataService } from '../services/equipment-data.service';
import { EquipmentCategoryModel } from '../models/equipment-category.model';
import { EquipmentPositionModel } from '../models/equipment-position.model';
import { EquipmentQualityModel } from '../models/equipment-quality.model';

@Injectable({
    providedIn: 'root',
})
export class EquipmentApi {
    constructor(private equipmentDataService: EquipmentDataService) {}

    getPositions(): Observable<EquipmentPositionModel[]> {
        return of(this.equipmentDataService.equipmentPositions);
    }

    getQualities(): Observable<EquipmentQualityModel[]> {
        return of(this.equipmentDataService.equipmentQualities);
    }

    getCategories(): Observable<EquipmentCategoryModel[]> {
        return of(this.equipmentDataService.equipmentCategories);
    }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EquipmentCategoryDataService } from '../services/equipment-category-data.service';
import { EquipmentCategoryModel } from '../models/equipment-category.model';

@Injectable({
    providedIn: 'root',
})
export class EquipmentCategoryApi {
    constructor(private equipmentCategoryDataService: EquipmentCategoryDataService) {}

    getAll(): Observable<EquipmentCategoryModel[]> {
        return of(this.equipmentCategoryDataService.equipmentCategories);
    }
}

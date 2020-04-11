import { Component, OnInit } from '@angular/core';
import { EquipmentCategoryModel } from '../../models/equipment-category.model';
import { EquipmentCategoryApi } from '../../api/equipment-category.api';

@Component({
    selector: 'app-equipment-categories-container',
    templateUrl: './equipment-categories-container.component.html',
    styleUrls: ['./equipment-categories-container.component.scss'],
})
export class EquipmentCategoriesContainerComponent implements OnInit {
    equipmentCategories: EquipmentCategoryModel[];

    constructor(private equipmentCategoryApi: EquipmentCategoryApi) {}

    ngOnInit(): void {
        this.equipmentCategoryApi.getAll().subscribe(equipmentCategories => {
            this.equipmentCategories = equipmentCategories;
            console.log(this.equipmentCategories);
        });
    }
}

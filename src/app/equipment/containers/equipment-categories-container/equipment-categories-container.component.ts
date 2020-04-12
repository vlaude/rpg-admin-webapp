import { Component, OnInit } from '@angular/core';
import { EquipmentCategoryModel } from '../../models/equipment-category.model';
import { EquipmentApi } from '../../api/equipment.api';

@Component({
    selector: 'app-equipment-categories-container',
    templateUrl: './equipment-categories-container.component.html',
    styleUrls: ['./equipment-categories-container.component.scss'],
})
export class EquipmentCategoriesContainerComponent implements OnInit {
    equipmentCategories: EquipmentCategoryModel[];

    constructor(private equipmentApi: EquipmentApi) {}

    ngOnInit(): void {
        this.equipmentApi.getCategories().subscribe(equipmentCategories => {
            this.equipmentCategories = equipmentCategories;
            console.log(this.equipmentCategories);
        });
    }
}

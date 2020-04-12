import { Component, Input, OnInit } from '@angular/core';
import { EquipmentCategoryModel } from '../../models/equipment-category.model';

@Component({
    selector: 'app-equipment-category-row',
    templateUrl: './equipment-category-row.component.html',
    styleUrls: ['./equipment-category-row.component.scss'],
})
export class EquipmentCategoryRowComponent implements OnInit {
    @Input() equipmentCategory: EquipmentCategoryModel;
    /**
     * Nombre de catégories parent. Utile pour structurer l'arbre.
     */
    @Input() upCategoriesCount: number;

    isLeafCategory: boolean;
    showSubCategories = true;

    constructor() {}

    ngOnInit(): void {
        this.isLeafCategory =
            !this.equipmentCategory.subCategories || this.equipmentCategory.subCategories?.length === 0;
    }
}

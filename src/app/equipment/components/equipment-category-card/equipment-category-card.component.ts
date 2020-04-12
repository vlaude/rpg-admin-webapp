import { Component, Input, OnInit } from '@angular/core';
import { EquipmentCategoryModel } from '../../models/equipment-category.model';

@Component({
    selector: 'app-equipment-category-card',
    templateUrl: './equipment-category-card.component.html',
    styleUrls: ['./equipment-category-card.component.scss'],
})
export class EquipmentCategoryCardComponent implements OnInit {
    @Input() equipmentCategory: EquipmentCategoryModel;

    constructor() {}

    ngOnInit(): void {}
}

import { Component, Input, OnInit } from '@angular/core';
import { EquipmentPositionModel } from '../../models/equipment-position.model';

@Component({
    selector: 'app-equipment-position-card',
    templateUrl: './equipment-position-card.component.html',
    styleUrls: ['./equipment-position-card.component.scss'],
})
export class EquipmentPositionCardComponent implements OnInit {
    @Input() equipmentPosition: EquipmentPositionModel;

    showEquipmentCategories = false;

    constructor() {}

    ngOnInit(): void {}
}

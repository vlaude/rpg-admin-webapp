import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EquipmentPositionModel } from '../../models/equipment-position.model';

@Component({
    selector: 'app-equipment-position-card',
    templateUrl: './equipment-position-card.component.html',
    styleUrls: ['./equipment-position-card.component.scss'],
})
export class EquipmentPositionCardComponent implements OnInit {
    @Input() equipmentPosition: EquipmentPositionModel;
    @Output() edit = new EventEmitter<void>();
    @Output() delete = new EventEmitter<void>();

    showEquipmentCategories = false;

    constructor() {}

    ngOnInit(): void {}
}

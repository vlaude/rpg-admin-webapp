import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EquipmentQualityModel } from '../../models/equipment-quality.model';

@Component({
    selector: 'app-equipment-quality-card',
    templateUrl: './equipment-quality-card.component.html',
    styleUrls: ['./equipment-quality-card.component.scss'],
})
export class EquipmentQualityCardComponent implements OnInit {
    @Input() equipmentQuality: EquipmentQualityModel;
    @Input() active: boolean;
    @Output() clicked = new EventEmitter<string>();

    constructor() {}

    ngOnInit(): void {}

    fireClicked(): void {
        this.clicked.emit(this.equipmentQuality.id);
    }
}

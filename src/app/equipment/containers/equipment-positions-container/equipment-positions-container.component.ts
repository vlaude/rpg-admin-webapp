import { Component, OnInit } from '@angular/core';
import { EquipmentPositionModel } from '../../models/equipment-position.model';
import { EquipmentApi } from '../../api/equipment.api';

@Component({
    selector: 'app-equipment-positions-container',
    templateUrl: './equipment-positions-container.component.html',
    styleUrls: ['./equipment-positions-container.component.scss'],
})
export class EquipmentPositionsContainerComponent implements OnInit {
    equipmentPositions: EquipmentPositionModel[];

    constructor(private equipmentApi: EquipmentApi) {}

    ngOnInit(): void {
        this.equipmentApi.getPositions().subscribe(equipmentPositions => {
            this.equipmentPositions = equipmentPositions;
            console.log(this.equipmentPositions);
        });
    }
}

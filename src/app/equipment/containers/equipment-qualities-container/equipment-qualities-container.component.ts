import { Component, OnInit } from '@angular/core';
import { EquipmentQualityModel } from '../../models/equipment-quality.model';
import { EquipmentApi } from '../../api/equipment.api';

@Component({
    selector: 'app-equipment-qualities-container',
    templateUrl: './equipment-qualities-container.component.html',
    styleUrls: ['./equipment-qualities-container.component.scss'],
})
export class EquipmentQualitiesContainerComponent implements OnInit {
    equipmentQualities: EquipmentQualityModel[];
    /**
     * Equipment quality id of the current active card.
     */
    equipmentQualityCardActive: string = null;

    constructor(private equipmentApi: EquipmentApi) {}

    ngOnInit(): void {
        this.equipmentApi.getQualities().subscribe(equipmentQualities => {
            this.equipmentQualities = equipmentQualities;
            console.log(this.equipmentQualities);
        });
    }

    handleEquipmentQualityCardClicked(id: string) {
        this.equipmentQualityCardActive = this.equipmentQualityCardActive === id ? null : id;
    }

    get activeEquipmentQuality(): EquipmentQualityModel {
        return this.equipmentQualities.find(eq => eq.id === this.equipmentQualityCardActive);
    }
}

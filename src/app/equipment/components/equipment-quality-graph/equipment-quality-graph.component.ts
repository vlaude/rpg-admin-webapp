import { Component, Input, OnInit } from '@angular/core';
import { EquipmentQualityModel } from '../../models/equipment-quality.model';

@Component({
    selector: 'app-equipment-quality-graph',
    templateUrl: './equipment-quality-graph.component.html',
    styleUrls: ['./equipment-quality-graph.component.scss'],
})
export class EquipmentQualityGraphComponent implements OnInit {
    @Input() equipmentQuality: EquipmentQualityModel;

    constructor() {}

    ngOnInit(): void {}
}

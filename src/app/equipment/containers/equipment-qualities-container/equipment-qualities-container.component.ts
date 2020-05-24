import { Component, OnInit } from '@angular/core';
import { EquipmentQualityModel } from '../../models/equipment-quality.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EquipmentFacade } from '../../../facades/equipment.facade';
import { SnackbarService } from '../../../core/services/snackbar.service';

@Component({
    selector: 'app-equipment-qualities-container',
    templateUrl: './equipment-qualities-container.component.html',
    styleUrls: ['./equipment-qualities-container.component.scss'],
})
export class EquipmentQualitiesContainerComponent implements OnInit {
    form: FormGroup;
    equipmentQualities: EquipmentQualityModel[];
    /**
     * Equipment quality id of the current active card.
     */
    equipmentQualityCardActive: string = null;

    constructor(
        private equipmentFacade: EquipmentFacade,
        private fb: FormBuilder,
        private snackbarService: SnackbarService
    ) {}

    ngOnInit(): void {
        this.equipmentFacade.getEquipmentQualities$().subscribe(equipmentQualities => {
            this.equipmentQualities = equipmentQualities;
        });
    }

    handleEquipmentQualityCardClicked(id: string) {
        this.equipmentQualityCardActive = this.equipmentQualityCardActive === id ? null : id;
    }

    get activeEquipmentQuality(): EquipmentQualityModel {
        return this.equipmentQualities.find(eq => eq.id === this.equipmentQualityCardActive);
    }

    showForm() {
        this.form = this.fb.group({
            name: this.fb.control('', Validators.required),
            color: this.fb.control('ffffff', Validators.required),
        });
    }

    createOrUpdateEquipmentQuality() {
        if (!this.form.valid) {
            return;
        }

        const equipmentQuality: EquipmentQualityModel = {
            ...this.form.value,
        };

        if (equipmentQuality.id) {
        } else {
            this.equipmentFacade.addEquipmentQuality(equipmentQuality);
            this.snackbarService.show(`Equipment Quality ${equipmentQuality.name} created.`);
        }
        this.hideForm();
    }

    hideForm() {
        this.form = null;
    }
}

import { Component, OnInit } from '@angular/core';
import { EquipmentPositionModel } from '../../models/equipment-position.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EquipmentFacade } from '../../../facades/equipment.facade';
import { SnackbarService } from '../../../core/services/snackbar.service';

@Component({
    selector: 'app-equipment-positions-container',
    templateUrl: './equipment-positions-container.component.html',
    styleUrls: ['./equipment-positions-container.component.scss'],
})
export class EquipmentPositionsContainerComponent implements OnInit {
    form: FormGroup;
    equipmentPositions: EquipmentPositionModel[];

    constructor(
        private equipmentFacade: EquipmentFacade,
        private fb: FormBuilder,
        private snackbarService: SnackbarService
    ) {}

    ngOnInit(): void {
        this.equipmentFacade.getEquipmentPositions$().subscribe(equipmentPositions => {
            this.equipmentPositions = this.equipmentPositions = equipmentPositions;
        });
    }

    showForm() {
        this.form = this.fb.group({
            name: this.fb.control('', Validators.required),
        });
    }

    createOrUpdateEquipmentPosition() {
        if (!this.form.valid) {
            return;
        }

        const equipmentPosition: EquipmentPositionModel = {
            ...this.form.value,
        };

        if (equipmentPosition.id) {
            this.equipmentFacade.updateEquipmentPosition(equipmentPosition);
            this.snackbarService.show(`Equipment Position ${equipmentPosition.name} updated.`);
        } else {
            this.equipmentFacade.addEquipmentPosition(equipmentPosition);
            this.snackbarService.show(`Equipment Position ${equipmentPosition.name} created.`);
        }
        this.hideForm();
    }

    hideForm() {
        this.form = null;
    }

    /**
     * Build the form with existing equipment position value.
     */
    onEditEquipmentPosition(equipmentPosition: EquipmentPositionModel) {
        this.form = this.fb.group({
            id: this.fb.control(equipmentPosition.id),
            name: this.fb.control(equipmentPosition.name, Validators.required),
        });
    }

    onDeleteEquipmentPosition(equipmentPosition: EquipmentPositionModel) {
        this.equipmentFacade.deleteEquipmentPosition(equipmentPosition);
        this.snackbarService.show(`Equipment Position ${equipmentPosition.name} deleted.`, 'error');
    }
}

import { Component, OnInit } from '@angular/core';
import { DamageTypeModel } from '../../models/damage-type.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AttributeFacade } from '../../../facades/attribute.facade';
import { AttributeModel } from '../../../attributes/models/attribute.model';
import { DamageTypeFacade } from '../../../facades/damage-type.facade';
import { take } from 'rxjs/operators';
import { SnackbarService } from '../../../core/services/snackbar.service';

@Component({
    selector: 'app-damage-types-container',
    templateUrl: './damage-types-container.component.html',
    styleUrls: ['./damage-types-container.component.scss'],
})
export class DamageTypesContainerComponent implements OnInit {
    damageTypes: DamageTypeModel[];

    form: FormGroup;
    /**
     * Sent to the form component for damage type creation.
     */
    attributes: AttributeModel[];

    constructor(
        private damageTypeFacade: DamageTypeFacade,
        private attributeFacade: AttributeFacade,
        private fb: FormBuilder,
        private snackbarService: SnackbarService
    ) {}

    ngOnInit(): void {
        this.damageTypeFacade.getDamageTypesWithAlterations$().subscribe(damageTypes => {
            this.damageTypes = damageTypes;
        });
    }

    async createOrUpdateDamageType() {
        if (!this.form.valid) {
            return;
        }

        /*
         * Retreive attributes by ids.
         */
        const attributesAffected: AttributeModel[] = await Promise.all(
            this.form.value.affects.map(affect =>
                this.attributeFacade.getAttributeById$(affect.id).pipe(take(1)).toPromise()
            )
        );
        const damageType: DamageTypeModel = {
            ...this.form.value,
            attributesAffected,
        };

        if (damageType.id) {
            this.damageTypeFacade.updateDamageType(damageType);
            this.snackbarService.show(`Damage Type ${damageType.name} updated.`);
        } else {
            this.damageTypeFacade.addDamageType(damageType);
            this.snackbarService.show(`Damage Type ${damageType.name} created.`);
        }

        this.hideForm();
    }

    /**
     * Build the angular form and show the card form.
     */
    showForm() {
        this.attributes = this.attributeFacade.getAttributes();
        this.form = this.fb.group({
            name: this.fb.control('', Validators.required),
            affects: this.fb.array([], Validators.required),
        });
    }

    hideForm() {
        this.form = null;
    }

    /**
     * Build the form from existing damage type value.
     */
    onEditDamageType(damageType: DamageTypeModel) {
        this.attributes = this.attributeFacade.getAttributes();

        const affectsControls = damageType.attributesAffected.map(att => this.fb.group({ id: att.id }));
        this.form = this.fb.group({
            id: this.fb.control(damageType.id),
            name: this.fb.control(damageType.name, Validators.required),
            affects: this.fb.array(affectsControls, Validators.required),
        });
    }

    onDeleteDamageType(damageType: DamageTypeModel) {
        this.damageTypeFacade.deleteDamageType(damageType);
        this.snackbarService.show(`Damage Type ${damageType.name} deleted.`, 'error');
    }
}

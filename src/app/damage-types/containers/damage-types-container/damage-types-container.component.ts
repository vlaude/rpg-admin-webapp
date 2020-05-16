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
            console.log(this.damageTypes);
        });
    }

    async createDamageType() {
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
        const newDamageType: Omit<DamageTypeModel, 'id'> = {
            name: this.form.value.name,
            attributesAffected,
        };
        this.damageTypeFacade.addDamageType(newDamageType);
        this.snackbarService.show(`Damage Type ${newDamageType.name} created.`);
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
}

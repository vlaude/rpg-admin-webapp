import { Component, OnInit } from '@angular/core';
import { AttributeModel } from '../../models/attribute.model';
import { AttributeFacade } from '../../../facades/attribute.facade';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DamageTypeModel } from '../../../damage-types/models/damage-type.model';
import { DamageTypeFacade } from '../../../facades/damage-type.facade';
import { SnackbarService } from '../../../core/services/snackbar.service';

@Component({
    selector: 'app-attributes-cards-container',
    templateUrl: './attributes-cards-container.component.html',
    styleUrls: ['./attributes-cards-container.component.scss'],
})
export class AttributesCardsContainerComponent implements OnInit {
    form: FormGroup;
    attributes: AttributeModel[];
    damageTypes: DamageTypeModel[];

    constructor(
        private attributeFacade: AttributeFacade,
        private damageTypeFacade: DamageTypeFacade,
        private fb: FormBuilder,
        private snackbarService: SnackbarService
    ) {}

    ngOnInit(): void {
        this.attributeFacade.getAttributes$().subscribe(attributes => {
            this.attributes = attributes;
        });
        this.damageTypeFacade.getDamageTypes$().subscribe(damageTypes => {
            this.damageTypes = damageTypes;
        });
    }

    showForm() {
        this.form = this.fb.group({
            name: this.fb.control('', Validators.required),
            description: this.fb.control(''),
            type: this.fb.control('attribute'),
            alterations: this.fb.array([]),
        });
    }

    createAttribute() {
        if (!this.form.valid) {
            return;
        }
        const newAttribute: Omit<AttributeModel, 'id'> = {
            name: this.form.value.name,
            description: this.form.value.description,
            alterations: this.form.value.alterations,
            isVitalitySource: this.form.value.type === 'vitality',
            isPowerSource: this.form.value.type === 'power',
        };
        this.attributeFacade.addAttribute(newAttribute);
        this.hideForm();
        this.snackbarService.show(`Attribute ${newAttribute.name} created.`);
    }

    hideForm() {
        this.form = null;
    }
}

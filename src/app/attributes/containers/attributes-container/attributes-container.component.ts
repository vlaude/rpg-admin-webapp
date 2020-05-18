import { Component, OnInit } from '@angular/core';
import { AttributeModel } from '../../models/attribute.model';
import { AttributeFacade } from '../../../facades/attribute.facade';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DamageTypeModel } from '../../../damage-types/models/damage-type.model';
import { DamageTypeFacade } from '../../../facades/damage-type.facade';
import { SnackbarService } from '../../../core/services/snackbar.service';

@Component({
    selector: 'app-attributes-container',
    templateUrl: './attributes-container.component.html',
    styleUrls: ['./attributes-container.component.scss'],
})
export class AttributesContainerComponent implements OnInit {
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

    createOrUpdateAttribute() {
        if (!this.form.valid) {
            return;
        }

        const attribute: AttributeModel = {
            ...this.form.value,
            isVitalitySource: this.form.value.type === 'vitality',
            isPowerSource: this.form.value.type === 'power',
        };

        if (attribute.id) {
            this.attributeFacade.updateAttribute(attribute);
            this.snackbarService.show(`Attribute ${attribute.name} updated.`);
        } else {
            this.attributeFacade.addAttribute(attribute);
            this.snackbarService.show(`Attribute ${attribute.name} created.`);
        }
        this.hideForm();
    }

    hideForm() {
        this.form = null;
    }

    /**
     * Build the form from the existing attribute value.
     */
    onEditAttribute(attribute: AttributeModel) {
        const alterationsControls = attribute.alterations.map(alt =>
            this.fb.group({
                type: alt.type,
                property: alt.property,
                value: alt.value,
            })
        );
        this.form = this.fb.group({
            id: this.fb.control(attribute.id),
            name: this.fb.control(attribute.name, Validators.required),
            description: this.fb.control(attribute.description),
            type: this.fb.control(
                attribute.isPowerSource ? 'power' : attribute.isVitalitySource ? 'vitality' : 'attribute'
            ),
            alterations: this.fb.array(alterationsControls),
        });
    }

    onDeleteAttribute(attribute: AttributeModel) {
        this.attributeFacade.deleteAttribute(attribute);
        this.snackbarService.show(`Attriute ${attribute.name} deleted.`, 'error');
    }
}

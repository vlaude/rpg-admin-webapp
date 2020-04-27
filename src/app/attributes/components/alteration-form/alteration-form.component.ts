import { Component, Input, OnInit } from '@angular/core';
import { AlterationModel, AlterationType } from '../../models/alteration.model';
import { ModalService } from '../../../_modal';
import { DamageTypeModel } from '../../../damage-types/models/damage-type.model';
import { AttributeModel } from '../../models/attribute.model';
import { DamageTypeDataService } from '../../../damage-types/services/damage-type-data.service';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AttributeFacade } from '../../../facades/attribute.facade';

@Component({
    selector: 'app-alteration-form',
    templateUrl: './alteration-form.component.html',
    styleUrls: ['./alteration-form.component.scss'],
})
export class AlterationFormComponent implements OnInit {
    @Input() form: FormGroup;

    newAlterationType: AlterationType;
    newAlterationProperty: string;
    newAlterationValue = 0;
    alterationPropertiesOptions: DamageTypeModel[] | AttributeModel[];

    faPlus = faPlus;

    constructor(
        private modalService: ModalService,
        private damageTypeDataService: DamageTypeDataService,
        private attributeFacade: AttributeFacade,
        private fb: FormBuilder
    ) {}

    ngOnInit(): void {}

    openAddAlterationModal() {
        this.modalService.open('add-alteration-modal');
    }

    closeAddAlterationModal() {
        this.modalService.close('add-alteration-modal');
    }

    /**
     * Dynamically add new controls in the form array.
     */
    createAlterationControls(alterationForm: Pick<AlterationModel, 'type' | 'property' | 'value'>): FormGroup {
        return this.fb.group({
            type: this.fb.control(alterationForm.type, Validators.required),
            property: this.fb.control(alterationForm.property, Validators.required),
            value: this.fb.control(alterationForm.value, Validators.required),
        });
    }

    addAlteration() {
        const newAlteration: Omit<AlterationModel, 'id'> = {
            type: this.newAlterationType,
            value: this.newAlterationValue,
            property: this.newAlterationProperty,
        };
        this.newAlterationType = null;
        this.newAlterationProperty = null;
        this.newAlterationValue = 0;
        const alterations = this.form.get('alterations') as FormArray;
        alterations.push(this.createAlterationControls(newAlteration));
        this.closeAddAlterationModal();
    }

    /**
     * Change alteration properties options according to the alteration type selected.
     * @param event type input select
     */
    onAlterationTypeChange(event) {
        switch (event.target.value) {
            case 'DamageType':
                this.alterationPropertiesOptions = this.damageTypeDataService.damageTypes;
                break;
            case 'Attribute':
                this.alterationPropertiesOptions = this.attributeFacade.getAttributes();
                break;
            case 'Ability':
                this.alterationPropertiesOptions = [];
                break;
            default:
                this.alterationPropertiesOptions = [];
                break;
        }
    }

    removeAlteration(alteration: Omit<AlterationModel, 'id'>) {
        const alterations = this.form.get('alterations') as FormArray;
        const index = alterations.value.indexOf(alteration);
        alterations.value.splice(index, 1);
    }
}

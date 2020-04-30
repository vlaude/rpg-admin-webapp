import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AttributeModel } from '../../models/attribute.model';
import { DamageTypeModel } from '../../../damage-types/models/damage-type.model';
import { AlterationType } from '../../models/alteration.model';

@Component({
    selector: 'app-attribute-card-form',
    templateUrl: './attribute-card-form.component.html',
    styleUrls: ['./attribute-card-form.component.scss'],
})
export class AttributeCardFormComponent implements OnInit {
    @Input() form: FormGroup;
    /**
     * Alterations properties.
     */
    @Input() attributes: AttributeModel[];
    @Input() damageTypes: DamageTypeModel[];
    @Output() submitClicked = new EventEmitter<FormGroup>();
    @Output() cancelClicked = new EventEmitter<void>();

    faPlus = faPlus;
    faTimes = faTimes;

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {}

    get alterations(): FormArray {
        return this.form.get('alterations') as FormArray;
    }

    addAlterationControls() {
        const alterations = this.form.get('alterations') as FormArray;
        alterations.push(
            this.fb.group({
                type: this.fb.control('', Validators.required),
                property: this.fb.control('', Validators.required),
                value: this.fb.control(0, Validators.required),
            })
        );
    }

    removeAlterationControls(alteration) {
        const alterations = this.form.get('alterations') as FormArray;
        const index = alterations.controls.indexOf(alteration);
        alterations.controls.splice(index, 1);
        alterations.value.splice(index, 1);
    }

    // TODO find another way to do this to avoid useless multiple template calls.
    getNewAlterationPropertiesByType(type: AlterationType) {
        switch (type) {
            case 'Attribute':
                return this.attributes;
            case 'DamageType':
                return this.damageTypes;
            case 'Ability':
                return [];
            default:
                return [];
        }
    }

    submit() {
        this.submitClicked.emit(this.form);
    }

    cancel() {
        this.cancelClicked.emit();
    }
}

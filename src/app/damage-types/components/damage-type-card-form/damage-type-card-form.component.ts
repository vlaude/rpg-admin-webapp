import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { AttributeModel } from '../../../attributes/models/attribute.model';

@Component({
    selector: 'app-damage-type-card-form',
    templateUrl: './damage-type-card-form.component.html',
    styleUrls: ['./damage-type-card-form.component.scss'],
})
export class DamageTypeCardFormComponent implements OnInit {
    @Input() form: FormGroup;
    /**
     * Damage types affects attributes.
     */
    @Input() attributes: AttributeModel[];
    @Output() submitClicked = new EventEmitter<FormGroup>();
    @Output() cancelClicked = new EventEmitter<void>();

    /**
     * Font awesome icons.
     */
    faPlus = faPlus;
    faTimes = faTimes;

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {}

    get affects(): FormArray {
        return this.form.get('affects') as FormArray;
    }

    addAffectControls() {
        const affects = this.form.get('affects') as FormArray;
        affects.push(this.fb.group({ id: this.fb.control('', Validators.required) }));
    }

    removeAffectControls(affect) {
        const affects = this.form.get('affects') as FormArray;
        const index = affects.controls.indexOf(affect);
        affects.controls.splice(index, 1);
        affects.value.splice(index, 1);
    }

    submit() {
        this.submitClicked.emit(this.form);
    }

    cancel() {
        this.cancelClicked.emit();
    }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-equipment-position-card-form',
    templateUrl: './equipment-position-card-form.component.html',
    styleUrls: ['./equipment-position-card-form.component.scss'],
})
export class EquipmentPositionCardFormComponent implements OnInit {
    @Input() form: FormGroup;
    @Output() submitted = new EventEmitter<FormGroup>();
    @Output() cancelClicked = new EventEmitter<void>();

    constructor() {}

    ngOnInit(): void {}

    submit() {
        this.submitted.emit(this.form);
    }
}

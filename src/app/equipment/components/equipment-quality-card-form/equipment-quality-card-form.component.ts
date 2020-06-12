import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-equipment-quality-card-form',
    templateUrl: './equipment-quality-card-form.component.html',
    styleUrls: ['./equipment-quality-card-form.component.scss'],
})
export class EquipmentQualityCardFormComponent implements OnInit {
    @Input() form: FormGroup;
    @Output() submitted = new EventEmitter<FormGroup>();
    @Output() cancelClicked = new EventEmitter<void>();

    color = '#ffffff';

    constructor() {}

    ngOnInit(): void {
        this.color = this.form.value?.color ? this.form.value.color : this.color;
    }

    submit() {
        this.form.value.color = this.color;
        this.submitted.emit(this.form);
    }
}

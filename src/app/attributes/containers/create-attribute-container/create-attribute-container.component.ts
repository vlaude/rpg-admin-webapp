import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AttributeFacade } from '../../../facades/attribute.facade';
import { AttributeModel } from '../../models/attribute.model';
import { Router } from '@angular/router';
import { SnackbarService } from '../../../core/services/snackbar.service';

@Component({
    selector: 'app-create-attribute-container',
    templateUrl: './create-attribute-container.component.html',
    styleUrls: ['./create-attribute-container.component.scss'],
})
export class CreateAttributeContainerComponent implements OnInit {
    form: FormGroup;

    constructor(
        private fb: FormBuilder,
        private attributeFacade: AttributeFacade,
        private router: Router,
        private snackbarService: SnackbarService
    ) {
        this.form = this.fb.group({
            name: fb.control('', [Validators.required, Validators.maxLength(20)]),
            description: fb.control('', [Validators.maxLength(255)]),
            type: fb.control('attribute'),
        });
    }

    ngOnInit(): void {}

    submitForm() {
        if (!this.form.valid) {
            return;
        }
        const newAttribute: Omit<AttributeModel, 'id'> = {
            name: this.form.value.name,
            description: this.form.value.description,
            alterations: [],
            isVitalitySource: this.form.value.type === 'vitality',
            isPowerSource: this.form.value.type === 'power',
        };
        this.attributeFacade.addAttribute(newAttribute);
        this.router.navigate(['attributes']);
        this.snackbarService.show(`Attribute ${newAttribute.name} created.`);
    }
}

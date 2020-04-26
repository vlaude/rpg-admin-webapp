import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-attribute-form',
    templateUrl: './attribute-form.component.html',
    styleUrls: ['./attribute-form.component.scss'],
})
export class AttributeFormComponent implements OnInit {
    @Input() form: FormGroup;

    constructor() {}

    ngOnInit(): void {}
}

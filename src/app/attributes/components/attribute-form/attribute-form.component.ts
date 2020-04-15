import { Component, OnInit } from '@angular/core';
import { AttributeType } from '../../models/attribute.model';

@Component({
    selector: 'app-attribute-form',
    templateUrl: './attribute-form.component.html',
    styleUrls: ['./attribute-form.component.scss'],
})
export class AttributeFormComponent implements OnInit {
    attributeType: AttributeType = 'attribute';

    constructor() {}

    ngOnInit(): void {}
}

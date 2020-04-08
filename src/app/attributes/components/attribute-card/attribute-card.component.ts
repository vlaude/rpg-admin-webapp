import { Component, Input, OnInit } from '@angular/core';
import { AttributeModel } from '../../models/attribute.model';

@Component({
    selector: 'app-attribute-card',
    templateUrl: './attribute-card.component.html',
    styleUrls: ['./attribute-card.component.scss'],
})
export class AttributeCardComponent implements OnInit {
    @Input() attribute: AttributeModel;

    constructor() {}

    ngOnInit(): void {}
}

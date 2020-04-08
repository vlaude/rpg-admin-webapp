import { Component, OnInit } from '@angular/core';
import { AttributeApi } from '../../api/attribute.api';
import { AttributeModel } from '../../models/attribute.model';

@Component({
    selector: 'app-attributes-container',
    templateUrl: './attributes-container.component.html',
    styleUrls: ['./attributes-container.component.scss'],
})
export class AttributesContainerComponent implements OnInit {
    attributes: AttributeModel[];

    constructor(private attributeApi: AttributeApi) {}

    ngOnInit(): void {
        this.attributeApi.getAll().subscribe(attributes => {
            this.attributes = attributes;
            console.log(this.attributes);
        });
    }
}

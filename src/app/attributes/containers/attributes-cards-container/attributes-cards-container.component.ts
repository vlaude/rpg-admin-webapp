import { Component, OnInit } from '@angular/core';
import { AttributeModel } from '../../models/attribute.model';
import { AttributeApi } from '../../api/attribute.api';
import { AttributeFacade } from '../../../facades/attribute.facade';

@Component({
    selector: 'app-attributes-cards-container',
    templateUrl: './attributes-cards-container.component.html',
    styleUrls: ['./attributes-cards-container.component.scss'],
})
export class AttributesCardsContainerComponent implements OnInit {
    attributes: AttributeModel[];

    constructor(private attributeFacade: AttributeFacade, private attributeApi: AttributeApi) {}

    ngOnInit(): void {
        this.attributeFacade.getAttributes$().subscribe(attributes => {
            this.attributes = attributes;
            console.log(this.attributes);
        });
        // this.attributeApi.getAll().subscribe(attributes => {
        //     this.attributes = attributes;
        //     console.log(this.attributes);
        // });
    }
}

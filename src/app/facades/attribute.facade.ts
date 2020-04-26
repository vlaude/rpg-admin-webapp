import { Injectable } from '@angular/core';
import { AttributeState } from '../state/attribute.state';
import { Observable } from 'rxjs';
import { AttributeModel } from '../attributes/models/attribute.model';

@Injectable({ providedIn: 'root' })
export class AttributeFacade {
    constructor(private readonly state: AttributeState) {}

    getAttributes$(): Observable<AttributeModel[]> {
        return this.state.getAttributes$();
    }

    getAttributes(): AttributeModel[] {
        return this.state.attributesValue;
    }

    addAttribute(attribute: Omit<AttributeModel, 'id'>) {
        const attributes = this.state.attributesValue;
        // Make fake id
        const attributeIds = attributes.map(a => Number(a.id));
        const newId = '' + Math.max(...attributeIds) + 1;
        const newAttribute: AttributeModel = {
            id: newId,
            ...attribute,
        };
        this.state.setAttributes([...attributes, newAttribute]);
    }
}

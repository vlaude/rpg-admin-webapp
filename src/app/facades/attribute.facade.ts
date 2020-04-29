import { Injectable } from '@angular/core';
import { AttributeState } from '../state/attribute.state';
import { Observable } from 'rxjs';
import { AttributeModel } from '../attributes/models/attribute.model';
import { filter, flatMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AttributeFacade {
    constructor(private readonly state: AttributeState) {}

    getAttributes$(): Observable<AttributeModel[]> {
        return this.state.getAttributes$();
    }

    getAttributes(): AttributeModel[] {
        return this.state.attributesValue;
    }

    getAttributeById$(id: string): Observable<AttributeModel> {
        return this.state.getAttributes$().pipe(
            flatMap(x => x),
            filter(attribute => attribute.id === id)
        );
    }

    addAttribute(attribute: Omit<AttributeModel, 'id'>) {
        const attributes = this.state.attributesValue;
        // Make fake id
        const attributeIds = attributes.map(a => Number(a.id));
        const id = attributeIds?.length <= 0 ? '1' : '' + Number(Math.max(...attributeIds) + 1);
        const newAttribute: AttributeModel = {
            id,
            ...attribute,
        };
        this.state.setAttributes([newAttribute, ...attributes]);
    }
}

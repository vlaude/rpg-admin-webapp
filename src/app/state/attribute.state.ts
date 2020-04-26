import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AttributeModel } from '../attributes/models/attribute.model';

@Injectable({
    providedIn: 'root',
})
export class AttributeState {
    attributes$: BehaviorSubject<AttributeModel[]>;

    constructor() {
        this.attributes$ = new BehaviorSubject<AttributeModel[]>(JSON.parse(localStorage.getItem('attributes')) || []);
    }

    getAttributes$(): Observable<AttributeModel[]> {
        return this.attributes$.asObservable();
    }

    get attributesValue(): AttributeModel[] {
        return this.attributes$.value;
    }

    setAttributes(attributes: AttributeModel[]): void {
        this.attributes$.next(attributes);
        localStorage.setItem('attributes', JSON.stringify(attributes));
    }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AttributeModel } from '../models/attribute.model';
import { AttributeDataService } from '../services/attribute-data.service';

@Injectable({
    providedIn: 'root',
})
export class AttributeApi {
    constructor(private attributeDataService: AttributeDataService) {}

    getAll(): Observable<AttributeModel[]> {
        return of(this.attributeDataService.attributes);
    }
}

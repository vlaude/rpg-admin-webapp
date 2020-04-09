import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DamageTypeDataService } from '../services/damage-type-data.service';
import { DamageTypeModel } from '../models/damage-type.model';

@Injectable({
    providedIn: 'root',
})
export class DamageTypeApi {
    constructor(private damageTypeDataService: DamageTypeDataService) {}

    getAll(): Observable<DamageTypeModel[]> {
        return of(this.damageTypeDataService.damageTypes);
    }
}

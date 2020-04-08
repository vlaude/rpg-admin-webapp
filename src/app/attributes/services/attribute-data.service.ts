import { Injectable } from '@angular/core';
import { AttributeModel } from '../models/attribute.model';

@Injectable({
    providedIn: 'root',
})
export class AttributeDataService {
    constructor() {}

    // tslint:disable-next-line:variable-name
    private readonly _attributes: AttributeModel[] = [
        {
            id: '1',
            name: 'Strength',
            description: '',
            alterations: [
                {
                    type: 'DamageType',
                    value: 5,
                    property: 'Physical',
                },
            ],
            isPowerSource: false,
            isVitalitySource: false,
        },
        {
            id: '2',
            name: 'Vitality',
            description: '',
            alterations: [],
            isPowerSource: false,
            isVitalitySource: true,
        },
        {
            id: '3',
            name: 'Mana',
            description: '',
            alterations: [],
            isPowerSource: true,
            isVitalitySource: false,
        },
        {
            id: '4',
            name: 'Chakra',
            description: '',
            alterations: [],
            isPowerSource: true,
            isVitalitySource: false,
        },
        {
            id: '5',
            name: 'Faith',
            description: '',
            alterations: [
                { type: 'DamageType', value: 4, property: 'Magical' },
                {
                    type: 'PowerSource',
                    value: 10,
                    property: 'Chakra',
                },
            ],
            isPowerSource: false,
            isVitalitySource: false,
        },
        {
            id: '6',
            name: 'Curse',
            description: '',
            alterations: [
                { type: 'DamageType', value: -5, property: 'Physical' },
                {
                    type: 'PowerSource',
                    value: -20,
                    property: 'Chakra',
                },
            ],
            isPowerSource: false,
            isVitalitySource: false,
        },
        {
            id: '7',
            name: 'Dexterity',
            description: '',
            alterations: [
                { type: 'DamageType', value: 5, property: 'Physical' },
                { type: 'DamageType', value: 5, property: 'Nature' },
                { type: 'Ability', value: 3, property: 'Dodge' },
                // { type: 'Ability', value: 10, property: 'Speed' },
            ],
            isPowerSource: false,
            isVitalitySource: false,
        },
    ];

    get attributes(): AttributeModel[] {
        return this._attributes;
    }
}

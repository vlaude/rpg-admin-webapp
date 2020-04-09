import { Injectable } from '@angular/core';
import { DamageTypeModel } from '../models/damage-type.model';

@Injectable({
    providedIn: 'root',
})
export class DamageTypeDataService {
    constructor() {}

    // tslint:disable-next-line:variable-name
    private readonly _damageTypes: DamageTypeModel[] = [
        {
            id: '1',
            name: 'Physique',
            alterations: [
                {
                    attribute: {
                        name: 'Strength',
                        isPowerSource: false,
                        isVitalitySource: false,
                    },
                    value: 5,
                },
                {
                    attribute: {
                        name: 'Dexterity',
                        isPowerSource: false,
                        isVitalitySource: false,
                    },
                    value: 2,
                },
                {
                    attribute: {
                        name: 'Vitality',
                        isPowerSource: false,
                        isVitalitySource: true,
                    },
                    value: 1,
                },
            ],
            attributesAffected: [
                {
                    id: '2',
                    name: 'Vitality',
                    description: '',
                    alterations: [],
                    isPowerSource: false,
                    isVitalitySource: true,
                },
            ],
        },
        {
            id: '2',
            name: 'Feu',
            alterations: [
                {
                    attribute: {
                        name: 'Intelligence',
                        isPowerSource: false,
                        isVitalitySource: false,
                    },
                    value: 7,
                },
                {
                    attribute: {
                        name: 'Faith',
                        isPowerSource: false,
                        isVitalitySource: false,
                    },
                    value: -3,
                },
            ],
            attributesAffected: [
                {
                    id: '2',
                    name: 'Vitality',
                    description: '',
                    alterations: [],
                    isPowerSource: false,
                    isVitalitySource: true,
                },
            ],
        },
        {
            id: '3',
            name: 'Drain',
            alterations: [
                {
                    attribute: {
                        name: 'Curse',
                        isPowerSource: false,
                        isVitalitySource: false,
                    },
                    value: 10,
                },
            ],
            attributesAffected: [
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
            ],
        },
        {
            id: '4',
            name: 'Goomage',
            alterations: [
                {
                    attribute: {
                        name: 'Strength',
                        isPowerSource: false,
                        isVitalitySource: false,
                    },
                    value: 12,
                },
            ],
            attributesAffected: [
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
            ],
        },
    ];

    get damageTypes(): DamageTypeModel[] {
        return this._damageTypes;
    }
}

import { Injectable } from '@angular/core';
import { EquipmentCategoryModel } from '../models/equipment-category.model';

@Injectable({
    providedIn: 'root',
})
export class EquipmentCategoryDataService {
    constructor() {}

    // tslint:disable-next-line:variable-name
    private readonly _equipmentCategories: EquipmentCategoryModel[] = [
        {
            id: '1',
            name: 'Armor',
            subCategories: [
                {
                    id: '4',
                    name: 'Heavy Armor',
                    subCategories: [
                        {
                            id: '7',
                            name: 'Helmet',
                            position: {
                                id: '1',
                                name: 'Head',
                            },
                        },
                        {
                            id: '8',
                            name: 'Chestplate',
                            position: {
                                id: '2',
                                name: 'Chest',
                            },
                            subCategories: [
                                { id: '10', name: 'Holy chestplate' },
                                { id: '11', name: 'Cursed chestplate' },
                            ],
                        },
                        {
                            id: '9',
                            name: 'Gloves',
                            position: {
                                id: '3',
                                name: 'Hands',
                            },
                        },
                    ],
                },
                {
                    id: '5',
                    name: 'Medium Armor',
                },
                {
                    id: '6',
                    name: 'Light Armor',
                    subCategories: [
                        {
                            id: '12',
                            name: 'Dress',
                            position: { id: '2', name: 'Chest' },
                        },
                        {
                            id: '14',
                            name: 'Hood',
                            position: {
                                id: '1',
                                name: 'Head',
                            },
                        },
                    ],
                },
            ],
            position: null,
        },
        {
            id: '2',
            name: 'Weapon',
            subCategories: [
                {
                    id: '15',
                    name: 'Distance',
                    subCategories: [
                        {
                            id: '17',
                            name: 'Bow',
                            position: {
                                id: '6',
                                name: 'Two Handed',
                            },
                        },
                    ],
                },
                {
                    id: '16',
                    name: 'Melee',
                    subCategories: [
                        {
                            id: '18',
                            name: 'Sword',
                            position: {
                                id: '8',
                                name: 'Left Hand',
                            },
                        },
                        {
                            id: '19',
                            name: 'Axe',
                            position: {
                                id: '7',
                                name: 'Right Hand',
                            },
                        },
                        {
                            id: '20',
                            name: 'Mace',
                            position: {
                                id: '6',
                                name: 'Two Handed',
                            },
                        },
                    ],
                },
            ],
        },
        {
            id: '3',
            name: 'Artifact',
            subCategories: [
                {
                    id: '21',
                    name: 'Ring',
                    position: {
                        id: '4',
                        name: 'Extra 1',
                    },
                },
                {
                    id: '22',
                    name: 'Scar',
                    position: {
                        id: '5',
                        name: 'Extra 2',
                    },
                },
            ],
        },
    ];

    get equipmentCategories(): EquipmentCategoryModel[] {
        return this._equipmentCategories;
    }
}

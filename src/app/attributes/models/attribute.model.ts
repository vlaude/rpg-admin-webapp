import { AlterationModel } from './alteration.model';

export interface AttributeModel {
    id: string;
    name: string;
    description?: string;
    alterations?: AlterationModel[];
    isPowerSource?: boolean;
    isVitalitySource?: boolean;
}

export type AttributeType = 'attribute' | 'vitality' | 'power';

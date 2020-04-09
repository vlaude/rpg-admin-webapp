import { AttributeModel } from './attribute.model';

export type AlterationType = 'DamageType' | 'PowerSource' | 'Ability';

export interface AlterationModel {
    id: string;
    type: AlterationType;
    value: number;
    property: string;
    attribute?: AttributeModel;
}

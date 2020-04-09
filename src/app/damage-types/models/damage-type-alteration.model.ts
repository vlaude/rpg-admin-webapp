import { AttributeModel } from '../../attributes/models/attribute.model';

export interface DamageTypeAlterationModel {
    attribute: Pick<AttributeModel, 'name' | 'isPowerSource' | 'isVitalitySource'>;
    value: number;
}

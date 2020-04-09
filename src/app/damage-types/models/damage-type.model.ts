import { AttributeModel } from '../../attributes/models/attribute.model';
import { DamageTypeAlterationModel } from './damage-type-alteration.model';

export interface DamageTypeModel {
    id: string;
    name: string;
    alterations?: DamageTypeAlterationModel[];
    attributesAffected: AttributeModel[];
}

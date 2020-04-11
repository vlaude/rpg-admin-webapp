import { EquipmentPositionModel } from './equipment-position.model';

export interface EquipmentCategoryModel {
    id: string;
    name: string;
    upCategory?: EquipmentCategoryModel;
    subCategories?: EquipmentCategoryModel[];
    position?: EquipmentPositionModel;
}

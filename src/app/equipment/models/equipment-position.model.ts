import { EquipmentCategoryModel } from './equipment-category.model';

export interface EquipmentPositionModel {
    id: string;
    name: string;
    equipmentCategories?: Pick<EquipmentCategoryModel, 'name'>[];
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttributesContainerComponent } from './attributes/containers/attributes-container/attributes-container.component';
import { DamageTypesContainerComponent } from './damage-types/containers/damage-types-container/damage-types-container.component';
// tslint:disable-next-line:max-line-length
import { EquipmentCategoriesContainerComponent } from './equipment/containers/equipment-categories-container/equipment-categories-container.component';
// tslint:disable-next-line:max-line-length
import { EquipmentPositionsContainerComponent } from './equipment/containers/equipment-positions-container/equipment-positions-container.component';
// tslint:disable-next-line:max-line-length
import { EquipmentQualitiesContainerComponent } from './equipment/containers/equipment-qualities-container/equipment-qualities-container.component';
import { CreateAttributeContainerComponent } from './attributes/containers/create-attribute-container/create-attribute-container.component';
import { AttributesCardsContainerComponent } from './attributes/containers/attributes-cards-container/attributes-cards-container.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/attributes',
    },
    {
        path: 'attributes',
        component: AttributesContainerComponent,
        children: [
            {
                path: '',
                component: AttributesCardsContainerComponent,
            },
            {
                path: 'add',
                component: CreateAttributeContainerComponent,
            },
        ],
    },
    {
        path: 'damage-types',
        component: DamageTypesContainerComponent,
    },
    {
        path: 'equipment-positions',
        component: EquipmentPositionsContainerComponent,
    },
    {
        path: 'equipment-qualities',
        component: EquipmentQualitiesContainerComponent,
    },
    {
        path: 'equipment-categories',
        component: EquipmentCategoriesContainerComponent,
    },
    {
        path: '**',
        redirectTo: '/attributes',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

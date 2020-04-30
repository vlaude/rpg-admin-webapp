// tslint:disable:max-line-length
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AttributesContainerComponent } from './attributes/containers/attributes-container/attributes-container.component';
import { AttributeCardComponent } from './attributes/components/attribute-card/attribute-card.component';
import { DamageTypesContainerComponent } from './damage-types/containers/damage-types-container/damage-types-container.component';
import { DamageTypeCardComponent } from './damage-types/components/damage-type-card/damage-type-card.component';
import { EquipmentCategoriesContainerComponent } from './equipment/containers/equipment-categories-container/equipment-categories-container.component';
import { EquipmentCategoryCardComponent } from './equipment/components/equipment-category-card/equipment-category-card.component';
import { EquipmentCategoryRowComponent } from './equipment/components/equipment-category-row/equipment-category-row.component';
import { EquipmentPositionsContainerComponent } from './equipment/containers/equipment-positions-container/equipment-positions-container.component';
import { EquipmentPositionCardComponent } from './equipment/components/equipment-position-card/equipment-position-card.component';
import { EquipmentQualitiesContainerComponent } from './equipment/containers/equipment-qualities-container/equipment-qualities-container.component';
import { EquipmentQualityCardComponent } from './equipment/components/equipment-quality-card/equipment-quality-card.component';
import { EquipmentQualityGraphComponent } from './equipment/components/equipment-quality-graph/equipment-quality-graph.component';
import { CreateAttributeContainerComponent } from './attributes/containers/create-attribute-container/create-attribute-container.component';
import { AttributesCardsContainerComponent } from './attributes/containers/attributes-cards-container/attributes-cards-container.component';
import { AttributeFormComponent } from './attributes/components/attribute-form/attribute-form.component';
import { AlterationFormComponent } from './attributes/components/alteration-form/alteration-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from './_modal';
import { AlterationRowComponent } from './attributes/components/alteration-row/alteration-row.component';
import { AbsPipe } from './pipes/abs.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DamageTypeCardFormComponent } from './damage-types/components/damage-type-card-form/damage-type-card-form.component';
import { AttributeCardFormComponent } from './attributes/components/attribute-card-form/attribute-card-form.component';

@NgModule({
    declarations: [
        AppComponent,
        AttributesContainerComponent,
        AttributeCardComponent,
        DamageTypesContainerComponent,
        DamageTypeCardComponent,
        EquipmentCategoriesContainerComponent,
        EquipmentCategoryCardComponent,
        EquipmentCategoryRowComponent,
        EquipmentPositionsContainerComponent,
        EquipmentPositionCardComponent,
        EquipmentQualitiesContainerComponent,
        EquipmentQualityCardComponent,
        EquipmentQualityGraphComponent,
        CreateAttributeContainerComponent,
        AttributesCardsContainerComponent,
        AttributeFormComponent,
        AlterationFormComponent,
        AlterationRowComponent,
        AbsPipe,
        DamageTypeCardFormComponent,
        AttributeCardFormComponent,
    ],

    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        CoreModule,
        FormsModule,
        ReactiveFormsModule,
        ModalModule,
        FontAwesomeModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

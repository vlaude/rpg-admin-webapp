// tslint:disable:max-line-length
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
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
import { AttributesContainerComponent } from './attributes/containers/attributes-container/attributes-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from './_modal';
import { AlterationRowComponent } from './attributes/components/alteration-row/alteration-row.component';
import { AbsPipe } from './shared/pipes/abs.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DamageTypeCardFormComponent } from './damage-types/components/damage-type-card-form/damage-type-card-form.component';
import { AttributeCardFormComponent } from './attributes/components/attribute-card-form/attribute-card-form.component';
import { PopoverEditDeleteComponent } from './shared/components/popover-edit-delete/popover-edit-delete.component';
import { NotEditingPipe } from './shared/pipes/not-editing.pipe';
import { AlteredByRowComponent } from './damage-types/components/altered-by-row/altered-by-row.component';
import { EquipmentPositionCardFormComponent } from './equipment/components/equipment-position-card-form/equipment-position-card-form.component';

@NgModule({
    declarations: [
        AppComponent,
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
        AttributesContainerComponent,
        AlterationRowComponent,
        AbsPipe,
        DamageTypeCardFormComponent,
        AttributeCardFormComponent,
        PopoverEditDeleteComponent,
        NotEditingPipe,
        AlteredByRowComponent,
        EquipmentPositionCardFormComponent,
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

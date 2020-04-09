import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AttributesContainerComponent } from './attributes/containers/attributes-container/attributes-container.component';
import { AttributeCardComponent } from './attributes/components/attribute-card/attribute-card.component';
import { DamageTypesContainerComponent } from './damage-types/containers/damage-types-container/damage-types-container.component';
import { DamageTypeCardComponent } from './damage-types/components/damage-type-card/damage-type-card.component';

@NgModule({
    declarations: [
        AppComponent,
        AttributesContainerComponent,
        AttributeCardComponent,
        DamageTypesContainerComponent,
        DamageTypeCardComponent,
    ],

    imports: [BrowserModule, AppRoutingModule, CoreModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AttributesContainerComponent } from './attributes/containers/attributes-container/attributes-container.component';
import { AttributeCardComponent } from './attributes/components/attribute-card/attribute-card.component';

@NgModule({
    declarations: [AppComponent, AttributesContainerComponent, AttributeCardComponent],

    imports: [BrowserModule, AppRoutingModule, CoreModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

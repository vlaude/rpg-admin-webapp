import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { AttributeLegendComponent } from './components/attribute-legend/attribute-legend.component';

@NgModule({
    declarations: [NavbarComponent, SidebarComponent, AttributeLegendComponent],
    imports: [CommonModule, RouterModule],
    exports: [NavbarComponent, SidebarComponent, AttributeLegendComponent],
})
export class CoreModule {}

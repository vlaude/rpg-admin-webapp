import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { AttributeLegendComponent } from './components/attribute-legend/attribute-legend.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { SnackbarService } from './services/snackbar.service';

@NgModule({
    declarations: [NavbarComponent, SidebarComponent, AttributeLegendComponent, SnackbarComponent],
    imports: [CommonModule, RouterModule],
    exports: [NavbarComponent, SidebarComponent, AttributeLegendComponent, SnackbarComponent],
    providers: [SnackbarService],
})
export class CoreModule {}

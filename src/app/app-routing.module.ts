import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttributesContainerComponent } from './attributes/containers/attributes-container/attributes-container.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/attributes',
    },
    {
        path: 'attributes',
        component: AttributesContainerComponent,
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

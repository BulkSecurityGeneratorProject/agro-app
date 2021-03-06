import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AgroAppSharedModule } from 'app/shared';
import {
  ProveedorComponent,
  ProveedorDetailComponent,
  ProveedorUpdateComponent,
  ProveedorDeletePopupComponent,
  ProveedorDeleteDialogComponent,
  proveedorRoute,
  proveedorPopupRoute
} from './';

const ENTITY_STATES = [...proveedorRoute, ...proveedorPopupRoute];

@NgModule({
  imports: [AgroAppSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    ProveedorComponent,
    ProveedorDetailComponent,
    ProveedorUpdateComponent,
    ProveedorDeleteDialogComponent,
    ProveedorDeletePopupComponent
  ],
  entryComponents: [ProveedorComponent, ProveedorUpdateComponent, ProveedorDeleteDialogComponent, ProveedorDeletePopupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AgroAppProveedorModule {}

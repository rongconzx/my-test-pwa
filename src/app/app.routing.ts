import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { BarcodeComponent } from './barcode/barcode.component';
import { MediaStreamComponent } from './barcode/media-stream/media-stream.component';
import { InputFieldComponent } from './barcode/input-field/input-field.component';
import { ScanditComponent } from './barcode/scandit/scandit.component';

const ROOT_ROUTES: Routes = [
  {
    path: '',
    component: AppComponent,
    pathMatch: 'full',
  },
  {
    path: 'barcode',
    component: BarcodeComponent,
  },
  {
    path: 'barcode/media',
    component: MediaStreamComponent,
  },
  {
    path: 'barcode/field',
    component: InputFieldComponent,
  },
  {
    path: 'barcode/scandit',
    component: ScanditComponent,
  },
  {
    path: 'barcode/orc',
    component: BarcodeComponent,
  },
  {
    path: '**',
    component: AppComponent,
    pathMatch: 'full',
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(ROOT_ROUTES),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }


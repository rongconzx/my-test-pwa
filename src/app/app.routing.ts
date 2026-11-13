import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { BarcodeComponent } from './barcode/barcode.component';
import { MediaStreamComponent } from './barcode/media-stream/media-stream.component';
import { InputFieldComponent } from './barcode/input-field/input-field.component';
import { PrivacyPolicyComponent } from './legal/privacy-policy.component';
import { TermsOfServiceComponent } from './legal/terms-of-service.component';

const ROOT_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/privacy-policy',
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
    path: 'barcode/orc',
    component: BarcodeComponent,
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
  },
  {
    path: 'terms-of-service',
    component: TermsOfServiceComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
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

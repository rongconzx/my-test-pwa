import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { BarcodeComponent } from './barcode/barcode.component';
import { MediaStreamComponent } from './barcode/media-stream/media-stream.component';

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
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '404',
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


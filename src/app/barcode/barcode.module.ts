import { NgModule } from '@angular/core';
import { SharedModule } from '../modules/shared.module';
import { ROUTES } from './barcode.route';
import { BarcodeComponent } from './barcode.component';
import { InstantSearchComponent } from './instant-search/instant-search.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { MediaStreamComponent } from './media-stream/media-stream.component';
import { OrcComponentComponent } from './orc-component/orc-component.component';

@NgModule({
  imports: [
    SharedModule,
    ROUTES,
  ],
  declarations: [
    BarcodeComponent,
    OrcComponentComponent,
    // InstantSearchComponent,
    // InputFieldComponent,
    // MediaStreamComponent,
  ],
})

export class BarcodeModule { }

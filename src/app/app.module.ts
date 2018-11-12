import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { FabMenuComponent } from './shared/fab-menu/fab-menu.component';
import { CoreModule } from './modules/core.module';
import { BarcodeModule } from './barcode/barcode.module';
import { MediaStreamComponent } from './barcode/media-stream/media-stream.component';
import { InputFieldComponent } from './barcode/input-field/input-field.component';
import { InstantSearchComponent } from './barcode/instant-search/instant-search.component';
import { ScanditConfigProvider, ScanditServiceConfig, ScanditPickerComponent, ScanditService } from 'scandit-sdk-angular';
import { ScanditComponent } from './barcode/scandit/scandit.component';

// tslint:disable-next-line:max-line-length
const licenseKey = 'ARlcrxXMCaRqPjr3QyVPDedD1xQ8Emxf2GAYPR54SjZVcqp29ncGQ/xpst3wZPK4XhytgKJ1lc09fLHlimA4IehHay0qc1fNA3lozR4c3Wi0WMuJrmaEwG5IfoVRTMCGsjtLvLtAK5q3MydW5enyhgJnIV+G7k6nJ+jvWcKORiP1pZvqSNaMtNZusOVEUvIcWmtZhqLBVS805FI/g29nVpJKVp8JC0JUWJ7mcNNJ1nazfa2GoAwO/dptSTZUcoWgRS0+5MADZp1yH7rkKABDEP8QuGrGJd+uxHvD2tzjtA0GqOymAO+8wjjRbtl4SqPkGQrle/NKjpckyC1HKhHVOB6+1YUYi+iAODPLLfVeyT8a5XqYEIqJsSAB4ycN9ohK7YW0so+/fJFWeE85St7wWi/exVXQw3z5ELhBbSrL2uefIOS8NXamfOreTIRZkMQRgdkqilR3yX2CFYrO9DMgcaEEyJEIDoJRvnByNoWTH/11J2Sp1EWz47ROiMFUdX5bj5zAFJKwwOEre6x5rlvMZZdyPEhd8ri2BfzAz2dbxchUM4Hh2Jd9FWDcUrzEcvT0DwTJEhaFGaiXFpmlxNQBjmuoq0x0Aew0LdcXGtmS14l4zdAlXTlKnXdCtkM2MvGQDs9HqygwZj6fipvt8Vb+Jxv9LxmNSAWQdKBpD2n2aQWo6eDwEerAiEXj7dTe1wcZI8/8dEwAA9+tKh3Y8eXlzg7t9BCQ//Do9+FdCycfSyYRHJltgnCmna/RIFAvA46j7BHlVkdwbd0KmB9AwzRi5GwYNojO0RvEvj81S7Uo2FTVE2Zf2sYCJi4GSw==';
const engineLocation = '/assets';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ToolbarComponent,
    SidenavComponent,
    FabMenuComponent,
    MediaStreamComponent,
    InputFieldComponent,
    InstantSearchComponent,
    ScanditPickerComponent,
    ScanditComponent,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BarcodeModule,
  ],
  bootstrap: [
    AppComponent,
  ],
  providers: [
    {
      provide: ScanditService,
      useValue: new ScanditService(<ScanditServiceConfig>{ licenseKey: licenseKey, engineLocation: engineLocation }),
    },
  ],
})

export class AppModule { }


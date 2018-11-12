import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TreeviewModule } from 'ngx-treeview';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScanditConfigProvider, ScanditServiceConfig, ScanditPickerComponent, ScanditService } from 'scandit-sdk-angular';

import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { CommonModule } from '@angular/common';

const licenseKey = 'ARlcrxXMCaRqPjr3QyVPDedD1xQ8Emxf2GAYPR54SjZVcqp29ncGQ/xpst3wZPK4XhytgKJ1lc09fLHlimA4IehHay0qc1fNA3lozR4c3Wi0WMuJrmaEwG5IfoVRTMCGsjtLvLtAK5q3MydW5enyhgJnIV+G7k6nJ+jvWcKORiP1pZvqSNaMtNZusOVEUvIcWmtZhqLBVS805FI/g29nVpJKVp8JC0JUWJ7mcNNJ1nazfa2GoAwO/dptSTZUcoWgRS0+5MADZp1yH7rkKABDEP8QuGrGJd+uxHvD2tzjtA0GqOymAO+8wjjRbtl4SqPkGQrle/NKjpckyC1HKhHVOB6+1YUYi+iAODPLLfVeyT8a5XqYEIqJsSAB4ycN9ohK7YW0so+/fJFWeE85St7wWi/exVXQw3z5ELhBbSrL2uefIOS8NXamfOreTIRZkMQRgdkqilR3yX2CFYrO9DMgcaEEyJEIDoJRvnByNoWTH/11J2Sp1EWz47ROiMFUdX5bj5zAFJKwwOEre6x5rlvMZZdyPEhd8ri2BfzAz2dbxchUM4Hh2Jd9FWDcUrzEcvT0DwTJEhaFGaiXFpmlxNQBjmuoq0x0Aew0LdcXGtmS14l4zdAlXTlKnXdCtkM2MvGQDs9HqygwZj6fipvt8Vb+Jxv9LxmNSAWQdKBpD2n2aQWo6eDwEerAiEXj7dTe1wcZI8/8dEwAA9+tKh3Y8eXlzg7t9BCQ//Do9+FdCycfSyYRHJltgnCmna/RIFAvA46j7BHlVkdwbd0KmB9AwzRi5GwYNojO0RvEvj81S7Uo2FTVE2Zf2sYCJi4GSw==';
const engineLocation = '/assets';
const privider = ScanditConfigProvider(licenseKey, engineLocation);

class Config implements ScanditServiceConfig {
  // tslint:disable-next-line:no-shadowed-variable
  constructor(public licenseKey: string, public engineLocation: string) {
  }

}


@NgModule({
  declarations: [
    AppComponent,
    ScanditPickerComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TreeviewModule.forRoot(),

    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: false })
  ],
  providers: [
    DataService,

    {
      provide: ScanditService,
      useValue: new ScanditService(<ScanditServiceConfig>{ licenseKey: licenseKey, engineLocation: engineLocation })
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

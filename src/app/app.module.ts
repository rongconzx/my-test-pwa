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

const licenseKey = 'AU889ATMGFWSMhLqWRXVakpAGjRuCo5uLmvODHZ8Qr8KdhVPG1Fb1Str9dmuQrFNhkc9MmFYZkSpcYgZHXTvwl5NoHCtIDovXzHgdFl8TMsNWteMo1AKU6JC9/czURme6UDuNzBIAWSgS80EDW0k5UZLApfHScIjqy2DZ+VTRmesQ29KfWJ+V/pj2DpXfKXVLX96BTRdSzN9YNxKxHo4PTFGTAKBVBVy13KQnExjPrrIISTfNVdR65F5US5kRnE1N33ZDXN6NsjmdEqiNlZkYvdYkFr1beoHr0ZwkGl+ThBWIfxsgHOtt/5p8Oc6XBrLy0TpzBhB+h/GSspt6UN0XxRQgrxVfu6euVEBTZ0QitHAblD6GloE8stI6so2cF0ou1HxLCZ1ioXzXm5gqQKd/rls/p//Q7b3piUgVyd79NcIY21gcVLLTMViIWwsaSEvyFBugcB629TVE4w0qVHfg3J4vsOYDMX+pGLgGc5OdPVwf70K+kDugydH1/wnLlKmBSg181Un5aXMQjruXSDj6Y7HvzcTV4DVXgKPu9Kx7ZaiTWJN1exeAqN9HUH1dCwPMfhSlyCjmM5Pdqh84yz+SbGoEJQTK58L1NsPQt8An46xfPedO6DYEHJGj8ZgJSS6Ybf7Y9KW1XkB2HUAWJgyLJ7/0Ws4BbojdZk78IGW2xZeRzDieRyH8TcO8X3hN1tbqWSAPSuoXK50BObT00Y2d83KagUruI8Qmh9pY7yWdkiAlGuPZKukdLjyScS2r2cKsp7pRWDq3aimPELMi21UXjDEDx7OBY7cwhDS5CroEYEUi5HxwkXb6t0IQBogCqoHXsPxi+FlSrWRxmIk3WR4H+pXRmQIeAptVmV+xW/3TMyatU8PjbCweN0sWiyvwi/H+Y9liHh0yrf5+BOwrq9Bgd/HpS2gYli46jcDKqe6BtgVlP4dJvJjNHNTraQh21PIbig800EO3JER9faY2ZnFqIQaHarwdyJ9FL7g+ruql9Abgav7fIlRJFG5LWjt3COFFtsjQBXHW2CEOyxp4Suw9W451VU+3LhQOkdxMVsFIZXmAw2RWXJKFOTSQtA3H5PeOQMjqDCLdeYynZvN65qD2bIrRdsfdsoXYQbTagn481rkHWL9YiNpKpgpTBmnJSzSjFco5nzPTX0YRVFXr759W3cqfIx3HZpb8VHURsiALEF6qOXVUmqNxH4t';
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

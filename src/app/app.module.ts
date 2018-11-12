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

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ToolbarComponent,
    SidenavComponent,
    FabMenuComponent,
    MediaStreamComponent,
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
})

export class AppModule {}


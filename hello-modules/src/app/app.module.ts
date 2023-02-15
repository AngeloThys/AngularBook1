import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShippingModule } from './shipping/shipping.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ShippingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RandomizerComponent } from './randomizer/randomizer.component';
import {HttpClientModule} from '@angular/common/http';
import { OutcomesComponent } from './outcomes/outcomes.component';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppModule } from './app.module';

@NgModule({
  imports: [
    
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppModule,
    BrowserTransferStateModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    RandomizerComponent,
    OutcomesComponent
  ]
})
export class AppBrowserModule { }

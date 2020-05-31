import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RandomizerComponent } from './randomizer/randomizer.component';
import {HttpClientModule} from '@angular/common/http';
import { OutcomesComponent } from './outcomes/outcomes.component';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { UsageComponent } from './usage/usage.component';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RandomizerComponent,
    OutcomesComponent,
    AboutComponent,
    UsageComponent,
    ListComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    TransferHttpCacheModule,
    NgtUniversalModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    RandomizerComponent,
    OutcomesComponent
  ]
})
export class AppModule { }

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
import {TooltipModule} from 'ngx-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RandomizerComponent,
    OutcomesComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    RandomizerComponent,
    OutcomesComponent
  ]
})
export class AppModule { }

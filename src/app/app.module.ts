import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { AppComponent } from './app.component';
import { MarkerService } from './marker.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: ' AIzaSyDbHC4v0xKhSAYLDafF3tn5mEdPwPUljk4 '
    })
  ],
  providers: [MarkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

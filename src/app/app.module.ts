import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TextoComponent } from './texto/texto.component';
import { AreaTextoComponent } from './area-texto/area-texto.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { TrueFalseComponent } from './true-false/true-false.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TextoComponent,
    AreaTextoComponent,
    CalendarioComponent,
    TrueFalseComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

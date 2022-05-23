import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { InputComponent } from './components/input/input.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { FooterComponent } from './footer/footer.component'; 
@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    MenuComponent,
    HomeViewComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//To fetch http has to be imported

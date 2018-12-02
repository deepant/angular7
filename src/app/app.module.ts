import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyContainerComponent } from './body-container/body-container.component';
import { FooterComponent } from './footer/footer.component';
import { LoginFormComponent } from './body-container/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyContainerComponent,
    FooterComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

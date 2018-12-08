import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyContainerComponent } from './body-container/body-container.component';
import { FooterComponent } from './footer/footer.component';
import { LoginFormComponent } from './body-container/login-form/login-form.component';
import { HighlightDirective } from './directive/highlight.directive';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './body-container/home/home.component';

const appRoutes: Routes = [
  {
    path : 'login', component : LoginFormComponent
  },
  {
    path : 'home', component : HomeComponent
  },
  {
    path : '**', redirectTo:'/login'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyContainerComponent,
    FooterComponent,
    LoginFormComponent,
    HighlightDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

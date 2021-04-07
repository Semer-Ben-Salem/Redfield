import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { FormUserProfileComponent } from './components/user-profile/form-user-profile/form-user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    UserProfileComponent,
    FormUserProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

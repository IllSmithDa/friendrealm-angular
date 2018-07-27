import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { AccountComponent } from './account/account.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AllVideosComponent } from './all-videos/all-videos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VideoPlayerComponent,
    LoginComponent,
    ProfileComponent,
    AccountComponent,
    NewsComponent,
    HomeComponent,
    AllVideosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    AppRoutingModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

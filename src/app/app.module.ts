import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { OtherPage } from '../pages/other/other';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { ChatPage } from '../pages/chat/chat';
import { GuidePage } from '../pages/guide/guide';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    OtherPage,
    HomePage,
    AboutPage,
    ContactPage,
    ChatPage,
    GuidePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    OtherPage,
    HomePage,
    AboutPage,
    ContactPage,
    ChatPage,
    GuidePage
  ],
  providers: [StatusBar, SplashScreen, { provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }

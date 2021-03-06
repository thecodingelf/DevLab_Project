import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule} from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { OtherPage } from '../pages/other/other';
import { ToDoPage } from '../pages/to-do/to-do';
import { SubHomePage } from '../pages/sub-home/sub-home';
import { StoryCapsulePage } from '../pages/story-capsule/story-capsule';
import { DataProvider } from '../providers/data/activities-data';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    OtherPage,
    HomePage,
    SubHomePage,
    ToDoPage,
    StoryCapsulePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    OtherPage,
    HomePage,
    SubHomePage,
    ToDoPage,
    StoryCapsulePage
  ],
  providers: [StatusBar, SplashScreen, { provide: ErrorHandler, useClass: IonicErrorHandler },
    DataProvider]
})
export class AppModule { }

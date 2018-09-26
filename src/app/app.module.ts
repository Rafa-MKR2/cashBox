import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { ConfigPage } from '../pages/config/config';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FirebaseDbProvider } from '../providers/firebase-db/firebase-db';


const config = {
  apiKey: "AIzaSyBr72d0XvTntLKe3xRojHlgGHkrAGGCAS8",
  authDomain: "codestore-b424a.firebaseapp.com",
  databaseURL: "https://codestore-b424a.firebaseio.com",
  projectId: "codestore-b424a",
  storageBucket: "codestore-b424a.appspot.com",
  messagingSenderId: "216137290723"
};


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ConfigPage,
    TabsPage,
    AboutPage,
    ContactPage,
    HomePage,
    

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    AboutPage,
    ConfigPage,
    TabsPage,
    ContactPage,
    HomePage,
    
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    FirebaseDbProvider
  ]
})
export class AppModule {}

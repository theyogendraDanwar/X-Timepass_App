import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';


// AngularFire
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
// End Of AngularFire

// Components
import { AppComponent } from './app.component';
import { ChatblockComponent } from './chatblock/chatblock.component';
import { ChatitemComponent } from './chatblock/chatitem/chatitem.component';
import { MainWindowComponent } from './main-window/main-window.component';
import { HeaderComponent, DialogAddClient } from './header/header.component';
// End Of Components

// Service Section
import {GetlistService} from './services/getlist.service.service';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
// End Of Service Section

export const firebase = {
  apiKey: "AIzaSyDhe3kU_ceNWwLaD5wsIiICaXF7rv_cWlw",
  authDomain: "whatsapp-49a8d.firebaseapp.com",
  databaseURL: "https://whatsapp-49a8d.firebaseio.com",
  projectId: "whatsapp-49a8d",
  storageBucket: "whatsapp-49a8d.appspot.com",
  messagingSenderId: "953192950881"
};

@NgModule({
  declarations: [
    AppComponent,
    ChatblockComponent,
    ChatitemComponent,
    MainWindowComponent,
    HeaderComponent,
    DialogAddClient,
    WelcomeScreenComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatSidenavModule,
    AngularFireModule.initializeApp(firebase),
    AngularFireDatabaseModule,
    MatIconModule,
    MatDialogModule,
    MatTabsModule
  ],
  entryComponents: [
    DialogAddClient
  ],
  providers: [
    GetlistService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

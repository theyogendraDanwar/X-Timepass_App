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
import { MatStepperModule } from '@angular/material/stepper';


// AngularFire
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
// End Of AngularFire

// Components
import { AppComponent } from './app.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { ChatblockComponent } from './chatblock/chatblock.component';
import { ChatitemComponent } from './chatblock/chatitem/chatitem.component';
import { MainWindowComponent } from './main-window/main-window.component';
import { HeaderComponent, DialogAddClient } from './header/header.component';
import { InfoScreenComponent } from './info-screen/info-screen.component';
// End Of Components

// Service Section
import {GetlistService} from './services/getlist.service.service';
import { AutheticationService } from './services/authetication.service';
// End Of Service Section

// Environment Settings
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ChatblockComponent,
    ChatitemComponent,
    MainWindowComponent,
    HeaderComponent,
    DialogAddClient,
    WelcomeScreenComponent,
    InfoScreenComponent
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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MatIconModule,
    MatDialogModule,
    MatTabsModule,
    AngularFireAuthModule,
    MatStepperModule
  ],
  entryComponents: [
    DialogAddClient
  ],
  providers: [
    GetlistService,
    AutheticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

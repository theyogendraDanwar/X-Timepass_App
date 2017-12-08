import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { LoadingQuotes } from '../loading.quotes';
import { AutheticationService } from '../services/authetication.service';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.css']
})
export class WelcomeScreenComponent implements OnInit {
  private app_name: string;
  private loadingmessage: any;
  private singlequote: any;
  private registerModel: Object;
  private loginModel: Object;
  private checkConnection: any;
  @Output() userStates = new EventEmitter<any>();

  constructor(private list: AutheticationService) {
    this.loadingmessage = new LoadingQuotes();
    this.app_name = 'TimePass';
    this.registerModel = {username: '', password: '', mobileno: ''};
    this.loginModel = {username: '' , password: ''};
  }

  ngOnInit() {
    this.singlequote =
      this.loadingmessage.quotesList[Math.floor(Math.random() * (6 - 0 + 1))].text;
    setInterval(() => {
      this.singleMessage();
    }, 20000);
    if (this.list.initialConnection()) {
      this.list.initialConnection().subscribe(item => {
        this.checkConnection = item;
      });
    }
  }

  submitForm(usr, pass) {
    // this.list.loginUser(usr.model, pass.model);
    console.log('ccfrfrcrf');
    this.userStates.emit({
      state: 'login',
      value: 1
    });
  }
  registerForm(usr, pass) {
    this.list.registerUser(usr.model, pass.model);
    this.userStates.emit({
        state: 'register',
        value: 1
    });
  }

  singleMessage() {
    this.singlequote =
      this.loadingmessage.quotesList[Math.floor(Math.random() * (6 - 0 + 1))].text;
  }

}

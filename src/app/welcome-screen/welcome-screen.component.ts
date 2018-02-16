import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LoadingQuotes} from '../loading.quotes';
import {AutheticationService} from '../services/authetication.service';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.css']
})
export class WelcomeScreenComponent implements OnInit {
  private app_name: string;
  private error_status: number;
  private loadingmessage: any;
  private singlequote: any;
  private process: number;
  private registerModel: Object;
  private loginModel: Object;
  private checkConnection: any;
  @Output() userStates = new EventEmitter<any>();

  constructor(private list: AutheticationService) {
    this.loadingmessage = new LoadingQuotes();
    this.app_name = 'TimePass';
    this.process = 0;
    this.registerModel = {username: '', password: '', mobileno: ''};
    this.loginModel = {username: '', password: ''};
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

  loadingAnimation(state) {
    this.process = state;
  }

  submitForm(usr, pass, state) {
    this.loadingAnimation(state);
    setTimeout(() => {
      this.loadingAnimation(2);
      this.list.loginUser(usr.model, pass.model).subscribe(response => {
        console.log(response);
        if (response === 401) {
          this.loadingAnimation(0);
          this.error_status = response;
        } else if (response === 200) {
          this.loadingAnimation(3);
          this.userStates.emit({
            state: 'login',
            value: 1
          });
        } else {
          console.log(response);
        }
      });
    }, 1000);
  }

  registerForm(usr, pass, state) {
    this.loadingAnimation(state);
    setTimeout(() => {
      this.loadingAnimation(2);
      this.list.registerUser(usr.model, pass.model).subscribe(response => {
        if (response === 401) {
          this.loadingAnimation(0);
          this.error_status = response;
        } else if (response === 444) {
          this.loadingAnimation(0);
          this.error_status = response;
        } else if (response === 200) {
          this.loadingAnimation(3);
          this.userStates.emit({
            state: 'register',
            value: 1
          });
        } else {
          console.log(response);
        }
      });
    }, 1000);
  }

  singleMessage() {
    this.singlequote =
      this.loadingmessage.quotesList[Math.floor(Math.random() * (6 - 0 + 1))].text;
  }

}

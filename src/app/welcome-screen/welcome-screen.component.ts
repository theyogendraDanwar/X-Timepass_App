import { Component, OnInit } from '@angular/core';
import { LoadingQuotes } from '../loading.quotes';
import {Observable} from 'rxjs/Observable';
import { GetlistService } from '../services/getlist.service.service';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.css']
})
export class WelcomeScreenComponent implements OnInit {
  private app_name: string;
  private loadingmessage: any;
  private singlequote: any;
  private model: Object = {};
  private checkConnection: any;

  constructor(private list: GetlistService) {
    this.loadingmessage = new LoadingQuotes();
    this.app_name = 'TimePass';
  }

  ngOnInit() {
    this.singlequote =
      this.loadingmessage.quotesList[Math.floor(Math.random() * (6 - 0 + 1))].text;
    setInterval(() => {
      this.singleMessage();
    }, 20000);
    if (this.list.initialConnection()) {
      console.log(this.list.initialConnection());
      this.list.initialConnection().subscribe(item => {
        console.log(item);
        this.checkConnection = item;
      });
    }
  }

  submitForm(usr, pass) {
     console.log(usr.model, pass.model);
  }

  singleMessage() {
    this.singlequote =
      this.loadingmessage.quotesList[Math.floor(Math.random() * (6 - 0 + 1))].text;
  }

}

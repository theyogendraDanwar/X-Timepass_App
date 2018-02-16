import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private screen: number;
  constructor() {
    this.screen = 0;
  }
  ScreenHandle($event) {
    console.log($event.state);
    if ($event.value === 1) {
      this.screen = $event.value;
    }
  }

}

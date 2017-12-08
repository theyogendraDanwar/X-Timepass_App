import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private screen: number;
  constructor() {
    this.screen = 1;
  }
  ScreenHandle($event) {
    console.log($event.state);
    if ($event.value === 1) {
      this.screen = $event.value;
    }
  }

}

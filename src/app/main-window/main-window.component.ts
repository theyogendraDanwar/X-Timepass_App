import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.css']
})
export class MainWindowComponent implements OnInit {
	private ImageSrc: string ="";
  constructor() { }
  ngOnInit() {
  	this.ImageSrc="https://assets.zapnito.com/assets/medium-default-avatar.png";
  }

}

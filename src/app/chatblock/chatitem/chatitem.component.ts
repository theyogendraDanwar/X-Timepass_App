import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-chatitem',
  templateUrl: './chatitem.component.html',
  styleUrls: ['./chatitem.component.css']
})
export class ChatitemComponent implements OnInit {
  public ImageSrc = 'https://vignette3.wikia.nocookie.net/tumblr-survivor-athena/images/7/7a/Blank_Avatar.png/revision/latest?cb=20161204161729';
  @Input() imageSrc: string;
  @Input() name: string;
  @Input() Date: Date;
  @Input() ChatBody: string;
  constructor() { }
  ngOnInit() {
    console.log(this.name);
  }
}

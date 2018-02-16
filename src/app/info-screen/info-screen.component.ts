import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { GetlistService } from '../services/getlist.service.service';

@Component({
  selector: 'app-info-screen',
  templateUrl: './info-screen.component.html',
  styleUrls: ['./info-screen.component.css']
})
export class InfoScreenComponent implements OnInit {

  private imgSRC;
  private isLinear = true;
  private progress = 'hide-progress';
  private firstFormGroup: FormGroup;
  private secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private getList: GetlistService) {
    this.imgSRC = 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png';
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  onFileChange(event) {
    this.progress = 'show-progress';
    this.getList.uploadImage(event.target.files[0], '898huhjb88bbh9h98b989b9b9_839eu38ue3').subscribe(result => {
      if (result) {
        this.imgSRC = result;
        setTimeout(() => {
          this.progress = 'hide-progress';
        }, 4000);
      } else {
        console.log(result);
      }
    });
  }
  sendLoginCode() {
  }

}

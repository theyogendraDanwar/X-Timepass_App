import { Component, OnInit } from '@angular/core';
import { GetlistService } from "../services/getlist.service.service";
import { AngularFireList } from "angularfire2/database";

@Component({
  selector: 'app-chatblock',
  templateUrl: './chatblock.component.html',
  styleUrls: ['./chatblock.component.css']
})
export class ChatblockComponent implements OnInit {
  private list1: any;
  private userlist: AngularFireList<any>;
  constructor(private list: GetlistService) {}
  ngOnInit() {
    this.userlist = this.list.getList();
    this.userlist.valueChanges().subscribe((items)=>{
      this.list1 = items;});
  }

}

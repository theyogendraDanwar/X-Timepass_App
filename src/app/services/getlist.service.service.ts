import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {toPromise} from 'rxjs/operator/toPromise';
import {observable} from "rxjs/symbol/observable";

@Injectable()
export class GetlistService {
  private itemsRef: AngularFireList<any>;
  private userList: AngularFireList<any>;
  private result: any;

  constructor(private db: AngularFireDatabase) {

    this.itemsRef = db.list('/');
    this.userList = db.list('/usrlist');

  }

  getList() {
    return this.itemsRef;
  }

  initialConnection(): Observable<any> {
    return new Observable<any>(observe => {
      this.userList.valueChanges().subscribe((items) => {
        if (items.length >= 1) {
          observe.next(1);
        } else if (items.length <= 0) {
          observe.next(0);
        } else {
          observe.next('error in the initial Connection');
        }
      });
    });
  }

  validateUser() {
  }

}

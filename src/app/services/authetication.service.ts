import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AutheticationService {

  private userList: AngularFireList<any>;
  private result: any;

  constructor(private db: AngularFireDatabase, private auth: AngularFireAuth) {

    this.userList = db.list('/usrlist');
    console.log(auth.authState);

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

  loginUser(usr, pass) {
    this.auth.auth.signInWithEmailAndPassword(usr, pass).then(userState => {
      this.result = 1;
      return this.result;
    }).catch((error: any) => {
      if (error === 'auth/wrong-password') {
        return this.result = 'wrong password';
      }
    });
  }

  registerUser(usr, pass) {
    this.auth.auth.createUserWithEmailAndPassword(usr, pass).then(userState => {
      this.result = 1;
      return this.result;
    }).catch((err: any) => {
      this.result = err;
    });
  }
}

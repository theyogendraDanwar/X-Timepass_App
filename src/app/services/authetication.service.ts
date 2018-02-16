import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable()
export class AutheticationService {

  private userList: AngularFireList<any>;
  private result: any;

  constructor(private db: AngularFireDatabase, private auth: AngularFireAuth) {
    this.userList = db.list('/usrlist');
    this.result = null;
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

  loginUser(usr, pass): Observable<any> {
    return new Observable<any>(observe => {
      this.auth.auth.signInWithEmailAndPassword(usr, pass).then(userState => {
        console.log(userState);
        observe.next(200);
      }).catch((error: any) => {
        if ( error.code === 'auth/wrong-password') {
          observe.next (401);
        }else {
          console.log('Error', error);
        }
      });
    });
  }

  registerUser(usr, pass): Observable<any> {
    return new Observable<any>(observe => {
      this.auth.auth.createUserWithEmailAndPassword(usr, pass).then(userState => {
        console.log(userState);
        observe.next(200);
      }).catch((error: any) => {
        if (error.code === 'auth/email-already-in-use') {
          observe.next(444);
        }else {
          console.log('Error', error);
        }
      });
    });
  }
}

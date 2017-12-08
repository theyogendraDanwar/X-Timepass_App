import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import * as firebase from 'firebase';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class GetlistService {
  private itemsRef: AngularFireList<any>;
  private metadata;
  constructor(private db: AngularFireDatabase ) {
    this.itemsRef = db.list('/');
    this.metadata = {
      size: 3000
    };
  }

  getList() {
    return this.itemsRef;
  }

  uploadImage(file: FormData, fileName: string): Observable<any> {
    return new Observable<any> (observe => {
      const path = firebase.storage().ref().child('uploads/');
      const photoRef = path.child(fileName);
      photoRef.put( file ).then((snap) => {
        if (snap.state === 'success' ) {
          console.log(snap);
          observe.next(snap.downloadURL);
        }
      }).catch((err) => {
        observe.next(err);
      });
    });
  }
}

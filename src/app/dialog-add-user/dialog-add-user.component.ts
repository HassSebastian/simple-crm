import { Component } from '@angular/core';
import { User } from 'src/models/user';
import {
  Firestore,
  collectionData,
  collection,
  setDoc,
  doc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss'],
})
export class DialogAddUserComponent {
  users$: Observable<any>;
  user = new User();
  birthDate: any = Date();

  constructor(private firestore: Firestore) {
    const coll = collection(firestore, 'users');
    this.users$ = collectionData(coll);
    this.users$.subscribe((newUsers) => {
      console.log('neue User:', newUsers);
      this.user = newUsers;
    });
  }

  saveUser() {
    this.birthDate > 1 ? (this.user.birthDate = this.birthDate.getTime()) : '';
    console.log('curret user: ', this.user);
    const coll = collection(this.firestore, 'users');
    setDoc(doc(coll), this.user.toJson);
  }
}

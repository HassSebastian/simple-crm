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
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss'],
})
export class DialogAddUserComponent {
  users$: Observable<any>;
  user = new User();
  birthDate: any = Date();
  loading = false;
  allUsers:[]=[];
  
  

  constructor(private firestore: Firestore, public dialogRef: MatDialogRef<DialogAddUserComponent>) {
    const coll = collection(firestore, 'users');
    this.users$ = collectionData(coll);
    this.users$.subscribe((changes) => {
      console.log('neue User:', changes);
      this.allUsers = changes;
    });
  }

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log('curret user: ', this.user);
    this.loading = true;
    const coll = collection(this.firestore, 'users');
    setDoc(doc(coll), this.user.toJson());
    this.loading = false;
    this.dialogRef.close();
  }
}

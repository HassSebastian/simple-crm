import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  users$: Observable<any>;
  loading = false;
  allUsers:any [] = [];

  constructor(public dialog: MatDialog, private firestore: Firestore) {
    this.loading = true;
    const coll = collection(firestore, 'users');
    this.users$ = collectionData(coll, { idField: 'id' });
    this.users$.subscribe((changes) => {
      console.log('neue User:', changes);
      this.allUsers = changes;
      this.loading = false;
    });
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }
}

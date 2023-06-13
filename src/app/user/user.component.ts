import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from 'src/models/user';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  user = new User();

  constructor(public dialog: MatDialog, private firestore: Firestore) {
    const coll = collection(firestore, 'users')
    
  }

  openDialog() {
    this.dialog.open(
      DialogAddUserComponent
    ); /* hier wird mit 'dialog', aus dem constructor, '.open' die DialogAddUserComponent geladen*/
  }
}

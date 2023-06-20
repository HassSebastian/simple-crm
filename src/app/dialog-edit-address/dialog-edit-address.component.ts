import { Component } from '@angular/core';
import { User } from 'src/models/user';
import { MatDialogRef } from '@angular/material/dialog';
import { Firestore, collection, doc, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss'],
})
export class DialogEditAddressComponent {
  user!: User;
  userId: string = '';
  loading: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<DialogEditAddressComponent>,
    private firestore: Firestore
  ) {}

  saveUser() {
    this.loading = true;
    updateDoc(
      doc(collection(this.firestore, 'users'), this.userId),
      this.user.toJson()
    ).then(() => {
      this.loading = false;
      
    });
  }
}

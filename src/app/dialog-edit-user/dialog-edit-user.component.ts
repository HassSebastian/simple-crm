import { Component } from '@angular/core';
import { User } from 'src/models/user';
import { MatDialogRef } from '@angular/material/dialog';
import { Firestore, collection, doc, updateDoc } from '@angular/fire/firestore';


@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent {
  user!: User;
  userId: string = '';

  loading: boolean = false;
  birthDate: any = Date();

  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>,private firestore: Firestore){}


  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    this.loading = true;
    updateDoc(doc(collection(this.firestore, 'users'), this.userId), this.user.toJson()).then(() => {
      this.loading = false;
    });
    }
}

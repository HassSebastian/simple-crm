import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from 'src/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  user = new User();

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(
      DialogAddUserComponent
    ); /* hier wird mit 'dialog', aus dem constructor, '.open' die DialogAddUserComponent geladen*/
  }
}

import { Component } from '@angular/core';
import { User } from 'src/models/user';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss'],
})
export class DialogAddUserComponent {
  user = new User();
  birthDate: any = Date();

  saveUser() {
    this.birthDate > 1 ? (this.user.birthDate = this.birthDate.getTime()) : '';
    console.log('curret user: ', this.user);
  }
}

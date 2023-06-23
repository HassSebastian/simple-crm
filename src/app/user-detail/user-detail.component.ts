import { Component } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  getDoc,
} from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent {
  userId: any = '';
  user: any = {};
  loading: boolean = false;
  users$: any = [];
  userData: any = [];

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private firestore: Firestore
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.userId = params['id'];
      this.getDB();
    });
  }

  async getDB() {
    const coll = collection(this.firestore, 'users');
    this.users$ = collectionData(coll);
    this.users$.subscribe(() => {
      this.getUser();
    });
  }

  async getUser() {
    // erzeugt ein Reference Objekt
    const userRef = doc(this.firestore, 'users', this.userId);
    // holt die Daten mithilfe des Reference Objektes
    const data = await getDoc(userRef);
    //lädt das Dokument in die Varable userDataArray als JSON.
    this.user = new User(data.data());
  }

  editAddressMenu() {
    const dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = new User(this.user.toJson()); //mit componentInstance greift man auf die angesprochene componente zu
    // ein neuer User wird erstellt, mit dem Inhalt, this.user.toJason().
    dialog.componentInstance.userId = this.userId;
  }

  editUserMenu() {
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.user = new User(this.user.toJson()); //mit componentInstance greift man auf die angesprochene componente zu
    // ein neuer User wird erstellt, mit dem Inhalt, this.user.toJason().
    dialog.componentInstance.userId = this.userId;
    dialog.componentInstance.birthDate = new Date(this.user.birthDate);
  }
}

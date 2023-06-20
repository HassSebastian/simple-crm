import { Component } from '@angular/core';
import { Firestore, collection, doc, getDoc } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
// import { AngularFirestore } from '@angular/fire/firestore';
// import { Observable } from 'rxjs';
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
  // user$: Observable<any> = new Observable();

  // user = new User();

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private firestore: Firestore
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.userId = params['id'];
      this.getUser();
    });
  }

  async getUser() {
    this.loading = true;
    const currentUser = (
      await getDoc(doc(collection(this.firestore, 'users'), this.userId))
    ).data();

    this.loading = false;

    this.user = new User(currentUser);

  }
  // import { AngularFirestore } from '@angular/fire/compat/firestore';
  // constructor(private route: ActivatedRoute, private firestore: AngularFirestore) {}

  // onInit() {
  //   this.route.paramMap.subscribe((paramMap) => {
  //     this.userId = paramMap.get('id');
  //     console.log(this.userId);
  //     this.getUser();
  //   });
  // }

  // getUser() {
  //   this.firestore
  //     .collection('users')
  //     .doc(this.userId)
  //     .valueChanges()
  //     .subscribe((user: any) => {
  //       this.user = user;
  //     });
  // }

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
  }
}

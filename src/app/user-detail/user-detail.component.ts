import { Component } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  docData,
  getDoc,
} from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { addDoc, setDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { User } from 'src/models/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent {
  userId: string = '';
  user$: Observable<any> = new Observable();
  user = new User();

  constructor(private route: ActivatedRoute, private firestore: Firestore) {}
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.userId = params['id'];
      this.getUser();
    });
  }

  async getUser() {
    // const coll = doc(this.firestore, 'users', this.userId);
    // const userSnap = await getDoc(coll);
    // this.user = new User(userSnap.data());

    const currentUser = (await getDoc(doc(this.firestore, 'users', this.userId))).data();
    this.user = new User(currentUser);
  }
}

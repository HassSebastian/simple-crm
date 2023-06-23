import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { MatDialog} from '@angular/material/dialog';
import { Firestore } from '@angular/fire/firestore';
import { AngularFireModule} from '@angular/fire/compat'
import { environment } from 'src/environments/environment';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(() => {
    const matDialogSpy = jasmine.createSpyObj('MatDialog', ['open']);
    TestBed.configureTestingModule({
      declarations: [UserComponent],
      providers: [
        { provide: MatDialog, useValue: matDialogSpy },
        { provide: Firestore, useValue: {} }
      ],
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
      ]
    });
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

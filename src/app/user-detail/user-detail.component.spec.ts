import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

import { UserDetailComponent } from './user-detail.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Firestore } from '@angular/fire/firestore';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

describe('UserDetailComponent', () => {
  const matDialogSpy = jasmine.createSpyObj('MatDialog', ['open']);
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserDetailComponent],
      providers: [
        { provide: MatDialog, useValue: matDialogSpy },
        { provide: ActivatedRoute, useValue: {} },
        { provide: Firestore, useValue: {} },
      ],
      imports: [
        AngularFireModule.initializeApp(environment.firebase),
        MatCardModule, MatIconModule, MatMenuModule
      ],
    });
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

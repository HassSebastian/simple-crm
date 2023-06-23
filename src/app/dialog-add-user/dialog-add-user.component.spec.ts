import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule} from '@angular/fire/compat'
import { environment } from 'src/environments/environment';

import { DialogAddUserComponent } from './dialog-add-user.component';
import { MatDialogRef } from '@angular/material/dialog';
import { Firestore } from '@angular/fire/firestore';
import { MatDatepickerModule } from '@angular/material/datepicker';

describe('DialogAddUserComponent', () => {
  let component: DialogAddUserComponent;
  let fixture: ComponentFixture<DialogAddUserComponent>;

  beforeEach(() => {
    const dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);
    TestBed.configureTestingModule({
      declarations: [DialogAddUserComponent],
      providers: [
        { provide: MatDialogRef, useValue: dialogRefSpy },

        { provide: Firestore, useValue: {} }
      ],
        imports: [
          AngularFireModule.initializeApp(environment.firebase), MatDatepickerModule
        ]
  
      

    });
    fixture = TestBed.createComponent(DialogAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

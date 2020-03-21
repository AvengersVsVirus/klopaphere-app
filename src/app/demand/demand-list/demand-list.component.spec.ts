import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DemandListComponent } from './demand-list.component';

describe('DemandListComponent', () => {
  let component: DemandListComponent;
  let fixture: ComponentFixture<DemandListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DemandListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

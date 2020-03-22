import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DemandMapComponent } from './demand-map.component';

describe('DemandMapComponent', () => {
  let component: DemandMapComponent;
  let fixture: ComponentFixture<DemandMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandMapComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DemandMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

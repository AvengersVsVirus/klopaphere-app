import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { SupplyPage } from './supply.page';

describe('SupplyPage', () => {
  let component: SupplyPage;
  let fixture: ComponentFixture<SupplyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SupplyPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SupplyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

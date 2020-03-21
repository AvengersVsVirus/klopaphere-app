import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { DemandPage } from './demand.page';

describe('DemandPage', () => {
  let component: DemandPage;
  let fixture: ComponentFixture<DemandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DemandPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(DemandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewAllSupermarketsPage } from './view-all-supermarkets.page';

describe('ViewAllSupermarketsPage', () => {
  let component: ViewAllSupermarketsPage;
  let fixture: ComponentFixture<ViewAllSupermarketsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllSupermarketsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewAllSupermarketsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabProductsPage } from './tab-products.page';

describe('TabProductsPage', () => {
  let component: TabProductsPage;
  let fixture: ComponentFixture<TabProductsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabProductsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabSupermarketLayoutPage } from './tab-supermarket-layout.page';

describe('TabSupermarketLayoutPage', () => {
  let component: TabSupermarketLayoutPage;
  let fixture: ComponentFixture<TabSupermarketLayoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabSupermarketLayoutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabSupermarketLayoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

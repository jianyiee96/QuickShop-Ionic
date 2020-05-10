import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModelViewListItemPage } from './model-view-list-item.page';

describe('ModelViewListItemPage', () => {
  let component: ModelViewListItemPage;
  let fixture: ComponentFixture<ModelViewListItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelViewListItemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModelViewListItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

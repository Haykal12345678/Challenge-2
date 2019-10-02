import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProdukPage } from './produk.page';

describe('ProdukPage', () => {
  let component: ProdukPage;
  let fixture: ComponentFixture<ProdukPage>;
  let produkPage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdukPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProdukPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a produk of 10 elements', () => {
    produkPage = fixture.nativeElement;
    const items = produkPage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});

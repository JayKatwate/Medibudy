import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinesCategoryWiseComponent } from './medicines-category-wise.component';

describe('MedicinesCategoryWiseComponent', () => {
  let component: MedicinesCategoryWiseComponent;
  let fixture: ComponentFixture<MedicinesCategoryWiseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicinesCategoryWiseComponent]
    });
    fixture = TestBed.createComponent(MedicinesCategoryWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

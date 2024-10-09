import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorywiseProductinfoComponent } from './categorywise-productinfo.component';

describe('CategorywiseProductinfoComponent', () => {
  let component: CategorywiseProductinfoComponent;
  let fixture: ComponentFixture<CategorywiseProductinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategorywiseProductinfoComponent]
    });
    fixture = TestBed.createComponent(CategorywiseProductinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

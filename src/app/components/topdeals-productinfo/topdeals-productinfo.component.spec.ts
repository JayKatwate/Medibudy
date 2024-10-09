import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopdealsProductinfoComponent } from './topdeals-productinfo.component';

describe('TopdealsProductinfoComponent', () => {
  let component: TopdealsProductinfoComponent;
  let fixture: ComponentFixture<TopdealsProductinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopdealsProductinfoComponent]
    });
    fixture = TestBed.createComponent(TopdealsProductinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

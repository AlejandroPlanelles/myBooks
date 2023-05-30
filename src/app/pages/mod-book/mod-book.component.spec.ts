import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModBookComponent } from './mod-book.component';

describe('ModBookComponent', () => {
  let component: ModBookComponent;
  let fixture: ComponentFixture<ModBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModBookComponent]
    });
    fixture = TestBed.createComponent(ModBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

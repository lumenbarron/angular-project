import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LucyComponent } from './lucy.component';

describe('LucyComponent', () => {
  let component: LucyComponent;
  let fixture: ComponentFixture<LucyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LucyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LucyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

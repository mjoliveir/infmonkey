import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenText } from './gen-text';

describe('GenText', () => {
  let component: GenText;
  let fixture: ComponentFixture<GenText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenText]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenText);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

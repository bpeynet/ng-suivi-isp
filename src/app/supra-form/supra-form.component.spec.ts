import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupraFormComponent } from './supra-form.component';

describe('SupraFormComponent', () => {
  let component: SupraFormComponent;
  let fixture: ComponentFixture<SupraFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupraFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupraFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuprasComponent } from './supras.component';

describe('SuprasComponent', () => {
  let component: SuprasComponent;
  let fixture: ComponentFixture<SuprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuprasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

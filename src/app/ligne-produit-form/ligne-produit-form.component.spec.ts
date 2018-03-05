import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LigneProduitFormComponent } from './ligne-produit-form.component';

describe('LigneProduitFormComponent', () => {
  let component: LigneProduitFormComponent;
  let fixture: ComponentFixture<LigneProduitFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LigneProduitFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LigneProduitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

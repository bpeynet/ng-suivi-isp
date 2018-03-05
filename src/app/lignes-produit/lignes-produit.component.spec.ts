import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LignesProduitComponent } from './lignes-produit.component';

describe('LignesProduitComponent', () => {
  let component: LignesProduitComponent;
  let fixture: ComponentFixture<LignesProduitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LignesProduitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LignesProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

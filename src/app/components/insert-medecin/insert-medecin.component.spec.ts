import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertMedecinComponent } from './insert-medecin.component';

describe('InsertMedecinComponent', () => {
  let component: InsertMedecinComponent;
  let fixture: ComponentFixture<InsertMedecinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertMedecinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

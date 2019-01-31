import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacienteAddCreditoComponent } from './paciente-add-credito.component';

describe('PacienteAddCreditoComponent', () => {
  let component: PacienteAddCreditoComponent;
  let fixture: ComponentFixture<PacienteAddCreditoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacienteAddCreditoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacienteAddCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

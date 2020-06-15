import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEspecialidadComponent } from './listar-especialidad.component';

describe('ListarEspecialidadComponent', () => {
  let component: ListarEspecialidadComponent;
  let fixture: ComponentFixture<ListarEspecialidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarEspecialidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEspecialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

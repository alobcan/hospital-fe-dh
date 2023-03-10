import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHistorialComponent } from './edit-historial.component';

describe('EditHistorialComponent', () => {
  let component: EditHistorialComponent;
  let fixture: ComponentFixture<EditHistorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHistorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

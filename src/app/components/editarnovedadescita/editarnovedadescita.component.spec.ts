import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarnovedadescitaComponent } from './editarnovedadescita.component';

describe('EditarnovedadescitaComponent', () => {
  let component: EditarnovedadescitaComponent;
  let fixture: ComponentFixture<EditarnovedadescitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarnovedadescitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarnovedadescitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

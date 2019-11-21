import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovedadescitaComponent } from './novedadescita.component';

describe('NovedadescitaComponent', () => {
  let component: NovedadescitaComponent;
  let fixture: ComponentFixture<NovedadescitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovedadescitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovedadescitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

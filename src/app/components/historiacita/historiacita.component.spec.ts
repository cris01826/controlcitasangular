import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriacitaComponent } from './historiacita.component';

describe('HistoriacitaComponent', () => {
  let component: HistoriacitaComponent;
  let fixture: ComponentFixture<HistoriacitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriacitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriacitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

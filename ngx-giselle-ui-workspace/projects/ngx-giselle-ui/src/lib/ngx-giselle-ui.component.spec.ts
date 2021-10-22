import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGiselleUiComponent } from './ngx-giselle-ui.component';

describe('NgxGiselleUiComponent', () => {
  let component: NgxGiselleUiComponent;
  let fixture: ComponentFixture<NgxGiselleUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxGiselleUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxGiselleUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

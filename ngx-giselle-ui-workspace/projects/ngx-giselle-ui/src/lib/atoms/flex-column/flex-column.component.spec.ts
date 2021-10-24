import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexColumnComponent } from './flex-column.component';

describe('FlexColumnComponent', () => {
  let component: FlexColumnComponent;
  let fixture: ComponentFixture<FlexColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

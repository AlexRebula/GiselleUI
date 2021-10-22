import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuListTemplateComponent } from './menu-list-template.component';

describe('MenuListTemplateComponent', () => {
  let component: MenuListTemplateComponent;
  let fixture: ComponentFixture<MenuListTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuListTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuListTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthPanelComponent } from './unauth-panel.component';

describe('UnauthPanelComponent', () => {
  let component: UnauthPanelComponent;
  let fixture: ComponentFixture<UnauthPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnauthPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnauthPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

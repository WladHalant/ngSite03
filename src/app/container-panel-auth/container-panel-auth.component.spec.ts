import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerPanelAuthComponent } from './container-panel-auth.component';

describe('ContainerPanelAuthComponent', () => {
  let component: ContainerPanelAuthComponent;
  let fixture: ComponentFixture<ContainerPanelAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerPanelAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerPanelAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

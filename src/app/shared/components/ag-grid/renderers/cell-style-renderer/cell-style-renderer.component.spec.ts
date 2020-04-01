import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellStyleRendererComponent } from './cell-style-renderer.component';

describe('CellStyleRendererComponent', () => {
  let component: CellStyleRendererComponent;
  let fixture: ComponentFixture<CellStyleRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellStyleRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellStyleRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

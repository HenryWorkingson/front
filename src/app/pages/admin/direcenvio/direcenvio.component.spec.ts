import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirecenvioComponent } from './direcenvio.component';

describe('DirecenvioComponent', () => {
  let component: DirecenvioComponent;
  let fixture: ComponentFixture<DirecenvioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirecenvioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirecenvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

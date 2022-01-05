import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentesPlatoComponent } from './componentes-plato.component';

describe('ComponentesPlatoComponent', () => {
  let component: ComponentesPlatoComponent;
  let fixture: ComponentFixture<ComponentesPlatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentesPlatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentesPlatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

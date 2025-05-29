import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradesComponentComponent } from './grades-component.component';

describe('GradesComponentComponent', () => {
  let component: GradesComponentComponent;
  let fixture: ComponentFixture<GradesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradesComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

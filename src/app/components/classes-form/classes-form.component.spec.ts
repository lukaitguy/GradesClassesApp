import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesFormComponent } from './classes-form.component';

describe('ClassesFormComponent', () => {
  let component: ClassesFormComponent;
  let fixture: ComponentFixture<ClassesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassesFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

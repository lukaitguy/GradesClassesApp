import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGradesComponent } from './home-grades.component';

describe('HomeGradesComponent', () => {
  let component: HomeGradesComponent;
  let fixture: ComponentFixture<HomeGradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeGradesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FingerballWorldCupComponent } from './fingerball-world-cup.component';

describe('FingerballWorldCupComponent', () => {
  let component: FingerballWorldCupComponent;
  let fixture: ComponentFixture<FingerballWorldCupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FingerballWorldCupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FingerballWorldCupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

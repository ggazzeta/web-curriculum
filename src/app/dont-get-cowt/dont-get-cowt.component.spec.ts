import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DontGetCowtComponent } from './dont-get-cowt.component';

describe('DontGetCowtComponent', () => {
  let component: DontGetCowtComponent;
  let fixture: ComponentFixture<DontGetCowtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DontGetCowtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DontGetCowtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

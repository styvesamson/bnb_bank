import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChecksDetailsComponent } from './admin-checks-details.component';

describe('AdminChecksDetailsComponent', () => {
  let component: AdminChecksDetailsComponent;
  let fixture: ComponentFixture<AdminChecksDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminChecksDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminChecksDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

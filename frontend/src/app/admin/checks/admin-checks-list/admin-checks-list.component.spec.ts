import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChecksListComponent } from './admin-checks-list.component';

describe('AdminChecksListComponent', () => {
  let component: AdminChecksListComponent;
  let fixture: ComponentFixture<AdminChecksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminChecksListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminChecksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

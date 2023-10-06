import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCityDialogComponent } from './new-city-dialog.component';

describe('NewCityDialogComponent', () => {
  let component: NewCityDialogComponent;
  let fixture: ComponentFixture<NewCityDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewCityDialogComponent]
    });
    fixture = TestBed.createComponent(NewCityDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

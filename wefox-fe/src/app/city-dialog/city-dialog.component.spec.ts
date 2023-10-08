import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityDialogComponent } from './city-dialog.component';
import { By } from '@angular/platform-browser';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CityDialogComponent', () => {
  let component: CityDialogComponent;
  let fixture: ComponentFixture<CityDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CityDialogComponent],
      providers: [{ provide: MatDialogRef, useValue: {} }, { provide: MAT_DIALOG_DATA, useValue: {city: {
        id: '1',
        title: 'Barcelona',
        content: 'Lorem ipsum dolor sit amet',
        lat: '41.390205',
        long: '2.154007',
        created_at: new Date(),
        updated_at: new Date(),
        image_url: 'http://wwww.image.url/barcelona'
      }}}],
      imports: [
        BrowserAnimationsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule]

      });
      fixture = TestBed.createComponent(CityDialogComponent);
      component = fixture.componentInstance;
      component.imageError = true;
      fixture.detectChanges();
  });

  it('should create',() => {
    expect(component).toBeTruthy();
  });


  it('should populate input fields on edit', () => {
    const compiled = fixture.debugElement;
    let input = compiled.query(By.css('#title')).nativeElement
    expect(input.value).toEqual('Barcelona')

    input = compiled.query(By.css('#content')).nativeElement
    expect(input.value).toEqual('Lorem ipsum dolor sit amet')

    input = compiled.query(By.css('#lat')).nativeElement
    expect(input.value).toEqual('41.390205')

    input = compiled.query(By.css('#long')).nativeElement
    expect(input.value).toEqual('2.154007')

    input = compiled.query(By.css('#image_url')).nativeElement
    expect(input.value).toEqual('http://wwww.image.url/barcelona')

  })

  it(`should render error message if image can't be accessed`, () => {
    const compiled = fixture.debugElement;
    let errorMessage = compiled.query(By.css('#image-error-message')).nativeElement
    expect(errorMessage.textContent).toEqual('Error loading image')
  })
});

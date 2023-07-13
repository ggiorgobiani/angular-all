import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTypeExamplesComponent } from './data-type-examples.component';

describe('DataTypeExamplesComponent', () => {
  let component: DataTypeExamplesComponent;
  let fixture: ComponentFixture<DataTypeExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataTypeExamplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataTypeExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

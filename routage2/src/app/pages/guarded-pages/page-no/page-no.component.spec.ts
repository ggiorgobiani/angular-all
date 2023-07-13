import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNoComponent } from './page-no.component';

describe('PageNoComponent', () => {
  let component: PageNoComponent;
  let fixture: ComponentFixture<PageNoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMaybeComponent } from './page-maybe.component';

describe('PageMaybeComponent', () => {
  let component: PageMaybeComponent;
  let fixture: ComponentFixture<PageMaybeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMaybeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMaybeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

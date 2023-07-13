import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageYesComponent } from './page-yes.component';

describe('PageYesComponent', () => {
  let component: PageYesComponent;
  let fixture: ComponentFixture<PageYesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageYesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageYesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

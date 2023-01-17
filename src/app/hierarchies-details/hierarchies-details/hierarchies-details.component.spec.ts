import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HierarchiesDetailsComponent } from './hierarchies-details.component';

describe('HierarchiesDetailsComponent', () => {
  let component: HierarchiesDetailsComponent;
  let fixture: ComponentFixture<HierarchiesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HierarchiesDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HierarchiesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

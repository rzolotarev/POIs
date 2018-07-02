import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantPoiComponent } from './restaurant-poi.component';

describe('RestorauntPoiComponent', () => {
  let component: RestaurantPoiComponent;
  let fixture: ComponentFixture<RestaurantPoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantPoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantPoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

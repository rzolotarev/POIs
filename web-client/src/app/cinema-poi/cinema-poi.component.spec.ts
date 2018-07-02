import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaPoiComponent } from './cinema-poi.component';

describe('CinemaPoiComponent', () => {
  let component: CinemaPoiComponent;
  let fixture: ComponentFixture<CinemaPoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CinemaPoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemaPoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

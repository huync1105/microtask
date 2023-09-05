import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoutingsWidgetComponent } from './routings-widget.component';

describe('RoutingsWidgetComponent', () => {
  let component: RoutingsWidgetComponent;
  let fixture: ComponentFixture<RoutingsWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoutingsWidgetComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RoutingsWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

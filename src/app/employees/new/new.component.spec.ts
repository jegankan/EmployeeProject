import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NewComponent } from './new.component';

describe('NewComponent', () => {
  let component: NewComponent;
  let fixture: ComponentFixture<NewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, FormsModule ],
      declarations: [ NewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create new employee page', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'New'`, () => {
    const fixture = TestBed.createComponent(NewComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('New');
  });
});


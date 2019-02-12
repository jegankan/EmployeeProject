import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditComponent } from './edit.component';


describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, FormsModule ],
      declarations: [ EditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create edit employee page', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Edit'`, () => {
    const fixture = TestBed.createComponent(EditComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Edit');
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCharComponent } from './create-char.component';

describe('CreateCharComponent', () => {
  let component: CreateCharComponent;
  let fixture: ComponentFixture<CreateCharComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCharComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

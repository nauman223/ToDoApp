import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoStatusColumn } from './todo-status-column';

describe('TodoStatusColumn', () => {
  let component: TodoStatusColumn;
  let fixture: ComponentFixture<TodoStatusColumn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoStatusColumn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoStatusColumn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

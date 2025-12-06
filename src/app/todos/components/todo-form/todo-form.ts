import { Component, EventEmitter, Input, Output, inject, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';

import { Todo } from '../../../core/models/todo.model';

@Component({
  selector: 'app-todo-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatButtonModule,
  ],
  templateUrl: './todo-form.html',
  styleUrl: './todo-form.scss',
})
export class TodoForm implements OnChanges {
  private fb = inject(FormBuilder);

  @Input() initialData: Todo | null = null;
  @Output() formSubmit = new EventEmitter<Partial<Todo>>();

  form = this.fb.group({
    todo: ['', Validators.required],
    completed: [false],
  });

  ngOnChanges() {
    if (this.initialData) {
      this.form.patchValue({
        todo: this.initialData.todo,
        completed: this.initialData.completed,
      });
    }
  }

  submit() {
    if (this.form.invalid) return;
    const formValue = this.form.value as Partial<Todo>;
    this.formSubmit.emit(formValue);
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CdkDropList, CdkDragDrop, CdkDrag } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { Todo } from '../../../core/models/todo.model';
import { TodoCard } from '../todo-card/todo-card';

@Component({
  selector: 'app-todo-status-column',
  standalone: true,
  imports: [CommonModule, CdkDropList, CdkDrag,TodoCard],
  templateUrl: './todo-status-column.html',
  styleUrls: ['./todo-status-column.scss']
})
export class TodoStatusColumn {
  @Input() title!: string;
  @Input() listId!: string;
  @Input() connectedTo: string[] = [];
  @Input() items: Todo[] = [];

  @Output() itemDropped = new EventEmitter<CdkDragDrop<Todo[]>>();

  drop(event: CdkDragDrop<Todo[]>) {
    this.itemDropped.emit(event);
  }
}

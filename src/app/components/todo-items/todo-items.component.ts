import { Component, input, output } from '@angular/core';
import { Todo } from '../../model/todo.type';
import { HighlightCompletedTodoDirective } from '../../directives/highlight-completed-todo.directive';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-todo-items',
  imports: [HighlightCompletedTodoDirective,UpperCasePipe],
  templateUrl: './todo-items.component.html',
  styleUrl: './todo-items.component.scss'
})
export class TodoItemsComponent {
todo = input.required <Todo>()
todoToggled =output<Todo>();

todoClicked(){
  this.todoToggled.emit(this.todo())
}
}

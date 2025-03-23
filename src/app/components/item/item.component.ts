import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { tarefa, TasksComponent } from '../tasks/tasks.component';

@Component({
  selector: 'app-item',
  imports: [CommonModule, FormsModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
@Input() tarefa!:tarefa;
@Output() statusAlterado = new EventEmitter<tarefa>();
taskCheckBox: boolean = false;

mudarStatus(tarefa: tarefa): void {
  this.statusAlterado.emit(this.tarefa);
  }

}






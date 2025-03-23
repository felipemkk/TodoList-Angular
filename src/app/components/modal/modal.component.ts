import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal',
  imports: [CommonModule,FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class NovaTarefaModalComponent {
  novaTarefa = { id: 0 , tarefa: '', categoria: '', concluido: false };
  @Output() tarefaAdicionada = new EventEmitter();
  @Output() tarefaCancelada = new EventEmitter();

  adicionarTarefa() {
    this.tarefaAdicionada.emit(this.novaTarefa);
  }

  cancelarTarefa() {
    this.tarefaCancelada.emit();
  }
}

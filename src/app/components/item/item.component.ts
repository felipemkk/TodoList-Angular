import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { tarefa } from '../tasks/tasks.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { materialModuleSpecifier } from '@angular/cdk/schematics';

@Component({
  selector: 'app-item',
  imports: [CommonModule, FormsModule, MatExpansionModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
@Input() tarefa!:tarefa;
@Output() statusAlterado = new EventEmitter<tarefa>();
@Output() deletar = new EventEmitter<tarefa>();
@Output() TarefaEditada = new EventEmitter<tarefa>();

modalAlterar = false;



mudarStatus(tarefa: tarefa): void {
  this.statusAlterado.emit(this.tarefa);
  }

    deletarTarefa(){
    this.deletar.emit(this.tarefa);
    }

    abrirEdicao(){
      this.modalAlterar = !this.modalAlterar;
    }
    editarTarefa(){
      this.TarefaEditada.emit(this.tarefa)
      this.modalAlterar = false;
      }

      fecharModal(){
        this.modalAlterar = false;
      }
  }







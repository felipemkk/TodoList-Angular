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

modalAlterar = false;

taskCheckBox: boolean = false;

mudarStatus(tarefa: tarefa): void {
  this.statusAlterado.emit(this.tarefa);
  }

    deletarTarefa(){
    this.deletar.emit(this.tarefa);
    }

    editarTarefa(){
      this.modalAlterar = !this.modalAlterar;
      }

      fecharModal(){
        this.modalAlterar = false;
      }
  }







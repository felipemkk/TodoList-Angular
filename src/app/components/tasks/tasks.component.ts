import { Component } from '@angular/core';
import { ItemComponent } from "../item/item.component";
import { CommonModule } from '@angular/common';
import { NovaTarefaModalComponent } from '../modal/modal.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-tasks',
  imports: [ItemComponent, CommonModule,NovaTarefaModalComponent, FormsModule ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  exibirModal = false;
  
  tarefas: tarefa [] = [
    {id: 1, tarefa: "Comprar pão", categoria: "Mercado", concluido: true},
    {id: 2, tarefa: "Estudar Angular", categoria: "Estudos", concluido: false},
  ]

  novaTarefa(novaTarefa: tarefa): void {
    this.tarefas.push(novaTarefa);
    this.exibirModal = false; // Fecha o modal após adicionar a tarefa
  }

  fecharModal(): void {
    this.exibirModal = false;
  }
  atualizarStatusTarefa(tarefa: tarefa): void {
        tarefa.concluido = !tarefa.concluido;
  }

}
export interface tarefa {
  id: number,
  tarefa: string,
  categoria: string,
  concluido: boolean,
}




 
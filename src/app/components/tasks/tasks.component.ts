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
    const novoId = this.tarefas.length > 0 ? Math.max(...this.tarefas.map(t => t.id)) +1:1;
    const tarefaComId = {...novaTarefa, id: novoId};
    this.tarefas.push(tarefaComId)
    this.exibirModal = false; // Fecha o modal após adicionar a tarefa
  }

  
    editarTarefa(tarefaEditada: tarefa) {
      // Encontra o índice da tarefa que está sendo editada
      const index = this.tarefas.findIndex(t => t.id === tarefaEditada.id);
      
      // Se encontrar a tarefa no array (index diferente de -1)
      if (index !== -1) {
        // Substitui a tarefa antiga pela nova versão editada
        this.tarefas[index] = tarefaEditada;
      }
    } 
  

  fecharModal(): void {
    this.exibirModal = false;
  }
  atualizarStatusTarefa(tarefa: tarefa): void {
        tarefa.concluido = !tarefa.concluido;
  }

  deletarTarefa(tarefa: tarefa): void {
    console.log("Tarefa recebida para deletar:", tarefa);
    this.tarefas = this.tarefas.filter(t => t.id !== tarefa.id);
  }
}
export interface tarefa {
  id: number,
  tarefa: string,
  categoria: string,
  concluido: boolean,
}





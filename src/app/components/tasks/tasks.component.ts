import { Component } from '@angular/core';
import { ItemComponent } from "../item/item.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-tasks',
  imports: [ItemComponent, CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  
  tarefas: tarefa [] = [
    {id: 1, tarefa: "Comprar pão", categoria: "Mercado", concluido: "true"},
    {id: 2, tarefa: "Estudar Angular", categoria: "Estudos", concluido: "false"},
  ]
}
export interface tarefa {
  id: number,
  tarefa: string,
  categoria: string,
  concluido: string,
}


 
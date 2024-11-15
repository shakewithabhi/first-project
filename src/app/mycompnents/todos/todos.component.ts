import { Component, OnInit } from '@angular/core';

import { Todo } from '../../Todo';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule,TodoItemComponent],
  templateUrl: './todos.component.html',

  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit{

    todos:Todo[];
    constructor(){
      this.todos = [
        {
          sno:3,
          title:"this is a title",
          desc:"this is desc",
          active:true
        },
        {
          sno:4,
          title:"this is a title4",
          desc:"this is desc4",
          active:false
        },
        {
          sno:5,
          title:"this is a title5",
          desc:"this is desc5",
          active:true
        },
      ]
    }

    ngOnInit(): void{
    }
  }



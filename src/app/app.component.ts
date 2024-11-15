import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { TodosComponent } from './mycompnents/todos/todos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-project';
  constructor() {
    // setTimeout(() => {
    //   this.title="title changed"
    //     }, 2000);

  }
}

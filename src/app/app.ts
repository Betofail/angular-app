import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title: string = 'Hola mundo angular desde componente';
  users: string[] = ['pepe', 'juan', 'luis', 'beto'];

  visible: boolean = false;

  toggleVisibility(): void {
    this.visible = !this.visible;
    console.log("click executed")
  };
}

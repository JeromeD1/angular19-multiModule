import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'multimod';

  numbers :number[] = Array(5).fill(0).map((x, index)=> index + 1);
}

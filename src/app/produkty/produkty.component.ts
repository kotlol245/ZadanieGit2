import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produkty',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>Produkty</h3>
    <ul>
      <li *ngFor="let p of produkty">{{ p }}</li>
    </ul>
  `
})
export class ProduktyComponent {
  produkty: string[] = ['Chleb', 'Mleko', 'Masło'];
}
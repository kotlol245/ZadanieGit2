import { Component } from '@angular/core';

@Component({
  selector: 'app-koszyk',
  standalone: true,
  template: `<p>Koszyk (0)</p>`
})
export class KoszykComponent {
  koszyk: string[] = [];

  dodaj(produkt: string) {
    this.koszyk.push(produkt);
  }
}
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GenText } from '../gen-text/gen-text';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule, GenText],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true
})
export class Home {
  protected readonly title = signal('infinite-monkey');
  onlineDays: number = 0;
  charNumber: number = 0;

  ngOnInit() {
    this.calculateOnlineDays();
  }

  ngAfterViewInit() {
    // Atualiza após o componente ser renderizado
    setTimeout(() => {
      this.updateCharCount();
      // Atualiza periodicamente a cada segundo
      setInterval(() => this.updateCharCount(), 1000);
    }, 500);
  }

  private calculateOnlineDays(): void {
    const startDate = new Date('2025-12-31');
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - startDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    this.onlineDays = diffDays;
  }

  private updateCharCount(): void {
    // Lê diretamente do DOM
    const preElement = document.querySelector('pre.macaco-text');
    if (preElement) {
      const text = preElement.textContent || '';
      this.charNumber = text.length;
    }
  }
}



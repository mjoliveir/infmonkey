import { Component, signal, OnInit, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GenText } from "./gen-text/gen-text";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GenText],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, AfterViewInit {
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

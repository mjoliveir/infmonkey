import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-gen-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gen-text.html',
  styleUrl: './gen-text.css',
})
export class GenText implements OnInit, OnDestroy {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  // visibleText: string = '';

  // private dailyBuffer: string[] = [];

  // private fullText: string = '';

  // private intervalId: any;

  // private readonly characters =
  //   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 !@#$%^&*()_+-=[]{}|;:,.<>?';

  // private readonly MAX_VISIBLE = 10_000;

  // ngOnInit() {
  //   this.intervalId = setInterval(() => {
  //     this.generateRandomCharacter();
  //   }, 50);
  // }

  // ngOnDestroy() {
  //   clearInterval(this.intervalId);
  // }

  // private generateRandomCharacter(): void {
  //   const char =
  //     this.characters[Math.floor(Math.random() * this.characters.length)];

  //   this.dailyBuffer.push(char);

  //   if (this.visibleText.length >= this.MAX_VISIBLE) {
  //     this.visibleText =
  //       this.visibleText.slice(1) + char;
  //   } else {
  //     this.visibleText += char;
  //   }
  // }

  // saveDailyFile() {
  //   const content = this.dailyBuffer.join('');
  //   const blob = new Blob([content], { type: 'text/plain' });

  //   const a = document.createElement('a');
  //   a.href = URL.createObjectURL(blob);
  //   a.download = `macaco-${new Date().toISOString().slice(0,10)}.txt`;
  //   a.click();

  //   this.dailyBuffer = [];
  // }
}

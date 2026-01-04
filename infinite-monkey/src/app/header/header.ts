import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, ButtonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
  standalone: true
})
export class Header {

}

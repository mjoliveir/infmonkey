import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Menubar } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, ButtonModule, Menubar],
  templateUrl: './header.html',
  styleUrl: './header.css',
  standalone: true
})
export class Header implements OnInit {
  items: MenuItem[] | undefined;

  constructor(private router: Router){}
  showMenu = false;

@HostListener('window:scroll', [])
onScroll() {
  this.showMenu = window.scrollY > 200; // px a partir de onde aparece
}

  ngOnInit() {
    this.items = [
        {
            label: 'Início',
            routerLink: 'home'
        },
        {
            label: 'Histório',
            routerLink: 'history'
        },
        {
            label: 'Playground',
            routerLink: 'home'
        }
    ];
}

}

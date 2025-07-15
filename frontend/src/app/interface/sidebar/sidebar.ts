import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
menuItems = [
    {
      path: '/dashboard',
      icon: 'fa-solid fa-house',
      label: 'Dashboard'
    },
    {
      path: '/repositorios',
      icon: 'fa-brands fa-github',
      label: 'Repositórios'
    },
    {
      path: '/projetos-locais',
      icon: 'fa-solid fa-folder-arrow-down',
      label: 'Projetos Locais'
    },
    {
      path: '/configuracoes',
      icon: 'fa-solid fa-gear',
      label: 'Configurações'
    }
  ];
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-workbench',
  imports: [RouterModule, CommonModule],
  templateUrl: './workbench.html',
  styleUrl: './workbench.scss'
})
export class Workbench {
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

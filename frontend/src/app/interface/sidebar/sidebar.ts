import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GithubService } from '../../../core/services/github.service';
import { Repo } from '../../../shared/models/repo';

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
      icon: 'fa-solid fa-download',
      label: 'Projetos Locais'
    },
    {
      path: '/configuracoes',
      icon: 'fa-solid fa-gear',
      label: 'Configurações'
    }
  ];
  private githubService = inject(GithubService);
  list: Repo[] = [];
  ngOnInit() {
    this.githubService.getRepos().subscribe((repos: Repo[]) => {
      this.list = repos;
      console.log('Repositórios obtidos:', this.list);
    });
  }
}

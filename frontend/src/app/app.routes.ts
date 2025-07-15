import { Routes } from '@angular/router';
import { Workbench } from './interface/workbench/workbench';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/repositorios',
        pathMatch: 'full'
    },
    {
        path: 'repositorios',
        component: Workbench
    },
];

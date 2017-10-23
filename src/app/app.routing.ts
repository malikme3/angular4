import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: 'ctcl', pathMatch: 'full' },
  { path: '**', redirectTo: 'ctcl/home' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });

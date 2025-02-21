import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
const routes: Routes = [
  { path: '', redirectTo: '/alumnos/lista-alumnos', pathMatch: 'full' },

  {
    path: 'login',
    loadChildren: () =>
      import('./features/auth/auth/auth.module').then((m) => m.AuthModule),
  },

  {
    path: 'alumnos',
    loadChildren: () =>
      import('./features/alumnos/alumnos/alumnos.module').then(
        (m) => m.AlumnosModule
      ),
    canActivate: [AuthGuard],
  },

  {
    path: 'cursos',
    loadChildren: () =>
      import('./features/cursos/cursos/cursos.module').then(
        (m) => m.CursosModule
      ),
    canActivate: [AuthGuard],
  },

  {
    path: 'clases',
    loadChildren: () =>
      import('./features/clases/clases/clases.module').then(
        (m) => m.ClasesModule
      ),
    canActivate: [AuthGuard],
  },

  { path: '**', redirectTo: '/alumnos/lista-alumnos' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

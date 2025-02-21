import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/alumnos/lista-alumnos', pathMatch: 'full' },

  {
    path: 'alumnos',
    loadChildren: () =>
      import('./features/alumnos/alumnos/alumnos.module').then(
        (m) => m.AlumnosModule
      ),
  },

  {
    path: 'cursos',
    loadChildren: () =>
      import('./features/cursos/cursos/cursos.module').then(
        (m) => m.CursosModule
      ),
  },

  {
    path: 'clases',
    loadChildren: () =>
      import('./features/clases/clases/clases.module').then(
        (m) => m.ClasesModule
      ),
  },

  { path: '**', redirectTo: '/alumnos/lista-alumnos' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

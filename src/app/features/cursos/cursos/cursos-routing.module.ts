import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaCursosComponent } from '../components/lista-cursos/lista-cursos.component';
import { AbmCursosComponent } from '../components/abm-cursos/abm-cursos.component';

const routes: Routes = [
  { path: 'lista-cursos', component: ListaCursosComponent },
  { path: 'abm-cursos', component: AbmCursosComponent },
  { path: 'abm-cursos/:id', component: AbmCursosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosRoutingModule {}

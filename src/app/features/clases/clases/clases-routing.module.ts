import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaClasesComponent } from '../components/lista-clases/lista-clases.component';
import { AbmClasesComponent } from '../components/abm-clases/abm-clases.component';

const routes: Routes = [
  { path: 'lista-clases', component: ListaClasesComponent },
  { path: 'abm-clases', component: AbmClasesComponent },
  { path: 'abm-clases/:id', component: AbmClasesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClasesRoutingModule {}

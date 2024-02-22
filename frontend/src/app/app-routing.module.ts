import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardarClienteComponent } from './components/guardar-cliente/guardar-cliente.component';
import { ListarClientesComponent } from './components/listar-clientes/listar-clientes.component';

const routes: Routes = [
  {path:"formulario", component: GuardarClienteComponent},
  {path:"listado", component: ListarClientesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

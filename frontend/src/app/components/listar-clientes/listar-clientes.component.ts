import { Component } from '@angular/core';
import { ClientesService } from 'src/app/service/clientes.service';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent {

  clientes:any[] = []

  constructor(private clienteService: ClientesService){

  }

  ngOnInit(): void {
    this.getClientes()
  }

  getClientes(): void {
    this.clienteService.clientList().subscribe({
      next: res => {
        this.clientes = res
      }
    })
  }
}
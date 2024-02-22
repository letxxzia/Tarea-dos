import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/service/clientes.service';

@Component({
  selector: 'app-guardar-cliente',
  templateUrl: './guardar-cliente.component.html',
  styleUrls: ['./guardar-cliente.component.css']
})
export class GuardarClienteComponent {

  form: FormGroup


  constructor(private clienteService: ClientesService, private formBuilder: FormBuilder, private router: Router){
    this.form = this.formBuilder.group({
      nombre: [""],
      apellidoUno: [""],
      apellidoDos: [""]
    })
  }

  getForm(){
    this.clienteService.addClient(this.form.value).subscribe({
      next: res => {
        console.log(res);
        
      },
      error: err =>{
        console.log(err);
        
      }
    })
  }


}

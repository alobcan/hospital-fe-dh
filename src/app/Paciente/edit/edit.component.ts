import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Paciente } from 'src/app/Modelo/Paciente';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  paciente: Paciente = new Paciente();
  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar() {
    let id = localStorage.getItem("id");
    this.service.getPacienteId(+id).subscribe(data=>{
      this.paciente=data;
    })
  }

  Actualizar(paciente:Paciente){
    this.service.updatePaciente(paciente).subscribe(data=>{
      this.paciente=data;
      alert("Se actualizo el paciente con exito");
      this.router.navigate(["listar"]);
    })

  }

}

import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/Modelo/Paciente';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit-paciente',
  templateUrl: './edit-paciente.component.html',
  styleUrls: ['./edit-paciente.component.css']
})
export class EditPacienteComponent implements OnInit {

  paciente: Paciente = new Paciente();
  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar() {
    let id = localStorage.getItem("id_paciente");
    this.service.getPacienteId(+id).subscribe(data => {
      this.paciente = data;
    })
  }

  Actualizar(paciente: Paciente) {
    this.service.updatePaciente(paciente).subscribe(data => {
      this.paciente = data;
      alert("Se actualizo el paciente con exito");
      this.router.navigate(["listarPaciente"]);
    })

  }


}

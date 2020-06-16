import { Component, OnInit, ViewChild } from '@angular/core';
import { Paciente } from 'src/app/Modelo/Paciente';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';


@Component({
  selector: 'app-listar-paciente',
  templateUrl: './listar-paciente.component.html',
  styleUrls: ['./listar-paciente.component.css']
})

export class ListarPacienteComponent implements OnInit {


  displayedColumns: string[] = ['id', 'name', 'apellido', 'fecha_nacimiento', 'direccion', 'historial', 'acciones'];
  pacientes: Paciente[];
  filtroNombre: String;

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getPacientes().subscribe(data => {
      this.pacientes = data;
    })
  }

  EditarPaciente(paciente: Paciente): void {
    localStorage.setItem("id", paciente.id_paciente.toString());
    this.router.navigate(["editPaciente"]);
  }

  BorrarPaciente(paciente: Paciente) {
    this.service.deletePaciente(paciente).subscribe(data => {
      this.pacientes = this.pacientes.filter(p => p !== paciente);
      alert("Usuario eliminado");

    })
  }

  applyFilter() {
    if (this.filtroNombre != "") {
      this.pacientes = this.pacientes.filter(res => {
        return res.nombre.toLocaleLowerCase().match(this.filtroNombre.toLocaleLowerCase());
      })
    } else if (this.filtroNombre == "") {
      this.ngOnInit();
    }
  }

}

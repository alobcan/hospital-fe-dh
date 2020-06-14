import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Paciente } from 'src/app/Modelo/Paciente';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  pacientes: Paciente[];

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getPacientes().subscribe(data => {
      this.pacientes = data;
    })
  }

  Editar(paciente: Paciente): void {
    localStorage.setItem("id", paciente.id.toString());
    this.router.navigate(["edit"]);
  }

  Borrar(paciente:Paciente){
    this.service.deletePaciente(paciente).subscribe(data=>{
      this.pacientes=this.pacientes.filter(p=>p!==paciente);
      alert("Usuario eliminado");

    })
  }

}

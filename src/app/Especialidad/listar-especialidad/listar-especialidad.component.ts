import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Especialidad } from 'src/app/Modelo/Especialidad';

@Component({
  selector: 'app-listar-especialidad',
  templateUrl: './listar-especialidad.component.html',
  styleUrls: ['./listar-especialidad.component.css']
})
export class ListarEspecialidadComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'doctores', 'acciones'];
  especialidades:Especialidad[];

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getEspecialidades().subscribe(data =>{
      this.especialidades=data;
    })
  }

  fetchDoctores(especialidad:Especialidad){
    localStorage.setItem("id_especialidad",especialidad.id_especialidad.toString());
    this.router.navigate(["listarDoctor"]);
  }

  EditarEspecialidad(especialidad:Especialidad):void{
    localStorage.setItem("id_especialidad",especialidad.id_especialidad.toString());
    this.router.navigate(["editEspecialidad"]);
  }

}

import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Especialidad } from 'src/app/Modelo/Especialidad';

@Component({
  selector: 'app-edit-especialidad',
  templateUrl: './edit-especialidad.component.html',
  styleUrls: ['./edit-especialidad.component.css']
})
export class EditEspecialidadComponent implements OnInit {

  especialidad: Especialidad = new Especialidad();
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.Editar();
  }
  Editar() {
    let id = localStorage.getItem("id");
    this.service.getEspecialidadId(+id).subscribe(data => {
      this.especialidad = data;
    })
  }

  Actualizar(especialidad: Especialidad) {
    this.service.updateEspecialidad(especialidad).subscribe(data => {
      this.especialidad = data;
      alert("Se actualizo la especialidad con exito");
      this.router.navigate(["listarEspecialidad"]);
    })

  }

}

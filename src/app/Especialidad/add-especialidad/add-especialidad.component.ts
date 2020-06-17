import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Especialidad } from 'src/app/Modelo/Especialidad';

@Component({
  selector: 'app-add-especialidad',
  templateUrl: './add-especialidad.component.html',
  styleUrls: ['./add-especialidad.component.css']
})
export class AddEspecialidadComponent implements OnInit {

  especialidad:Especialidad = new Especialidad();

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  Guardar(){
    this.especialidad.id_ref=parseInt(localStorage.getItem("id_hospital"));
    this.service.createEspecialidad(this.especialidad).subscribe(data =>{
      alert("Se creo la especialidad con exito!");
      this.router.navigate(["listarHospital"]);
    })
  }
}

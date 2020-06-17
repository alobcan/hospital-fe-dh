import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Doctor } from 'src/app/Modelo/Doctor';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }

  doctor:Doctor=new Doctor();

  ngOnInit(): void {
  }

  Guardar(){
    let id = localStorage.getItem("id_especialidad");
    this.service.createDoctor(this.doctor, + id).subscribe(data=>{
      alert("Se agrego el doctor con exito..!");
      this.router.navigate(["listarDoctor"])
    })
  }

}

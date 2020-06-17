import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/Modelo/Doctor';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css']
})
export class EditDoctorComponent implements OnInit {

  doctor: Doctor = new Doctor();
  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar() {
    let id = localStorage.getItem("id_doctor");
    this.service.getDoctorId(+id).subscribe(data => {
      this.doctor = data;
    })
  }

  Actualizar(doctor: Doctor) {
    this.service.updateDoctor(doctor).subscribe(data => {
      this.doctor = data;
      alert("Se actualizo el Doctor con exito");
      this.router.navigate(["listarDoctor"]);
    })

  }

}

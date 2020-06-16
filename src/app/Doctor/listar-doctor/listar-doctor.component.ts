import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/Modelo/Doctor';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-doctor',
  templateUrl: './listar-doctor.component.html',
  styleUrls: ['./listar-doctor.component.css']
})
export class ListarDoctorComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'apellido', 'nacimiento','direccion','historial','acciones'];
  doctores:Doctor[];
  filtroDoctor: String;

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getDoctores().subscribe(data => {
      this.doctores = data;
    })
  }

  
  

  EditarDoctor(doctor:Doctor): void {
    localStorage.setItem("id", doctor.id.toString());
    this.router.navigate(["editDoctor"]);
  }

  BorrarDoctor(doctor:Doctor) {
    this.service.deleteDoctor(doctor).subscribe(data => {
      this.doctores = this.doctores.filter(p => p !== doctor);
      alert("Usuario eliminado");
    })
  }
  applyFilter() {
    if (this.filtroDoctor != "") {
      this.doctores = this.doctores.filter(res => {
        return res.nombre.toLocaleLowerCase().match(this.filtroDoctor.toLocaleLowerCase());
      })
    } else if (this.filtroDoctor == "") {
      this.ngOnInit();
    }
  }

}
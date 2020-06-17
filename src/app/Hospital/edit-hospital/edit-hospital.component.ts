import { Component, OnInit, NgModuleRef } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Hospital } from 'src/app/Modelo/Hospital';

@Component({
  selector: 'app-edit-hospital',
  templateUrl: './edit-hospital.component.html',
  styleUrls: ['./edit-hospital.component.css']
})
export class EditHospitalComponent implements OnInit {

  hospital:Hospital = new Hospital();
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.Editar();
  }
  Editar(){
    let id = localStorage.getItem("id_hospital");
    this.service.getHospitalId(+id).subscribe(data =>{
      this.hospital = data;
    })
  }

  Actualizar(hospital:Hospital){
    this.service.updateHospital(hospital).subscribe(data=> {
      this.hospital = data;
      alert("Se actualizo el hospital con exito");
      this.router.navigate(["listarHospital"]);
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Hospital } from 'src/app/Modelo/Hospital';

@Component({
  selector: 'app-add-hospital',
  templateUrl: './add-hospital.component.html',
  styleUrls: ['./add-hospital.component.css']
})
export class AddHospitalComponent implements OnInit {

  constructor(private service:ServiceService, private router:Router) { }
  hospital:Hospital = new Hospital();

  ngOnInit(): void {
  }

  Guardar(){
    this.service.createHospital(this.hospital).subscribe(data =>{
      alert("Se ha creado el nuevo hospital con exito");
      this.router.navigate(["listarHospital"]);
    })
  }

}

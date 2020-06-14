import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Paciente } from 'src/app/Modelo/Paciente';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }

  paciente:Paciente = new Paciente();

  ngOnInit(): void {
  }

  Guardar(){
    this.service.createPaciente(this.paciente).subscribe(data=>{
      alert("Se agrego el paciente con exito..!");
      this.router.navigate(["listar"])
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Paciente } from 'src/app/Modelo/Paciente';

@Component({
  selector: 'app-add-paciente',
  templateUrl: './add-paciente.component.html',
  styleUrls: ['./add-paciente.component.css']
})
export class AddPacienteComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }

  paciente:Paciente = new Paciente();

  ngOnInit(): void {
  }

  Guardar(){
    this.service.createPaciente(this.paciente).subscribe(data=>{
      alert("Se agrego el paciente con exito..!");
      this.router.navigate(["listarPaciente"])
    })
  }

}

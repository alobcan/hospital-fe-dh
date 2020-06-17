import { Component, OnInit } from '@angular/core';
import { Historial } from 'src/app/Modelo/Historial';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-historial',
  templateUrl: './add-historial.component.html',
  styleUrls: ['./add-historial.component.css']
})
export class AddHistorialComponent implements OnInit {

  historial: Historial = new Historial();
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  Guardar() {
    this.historial.id_ref = parseInt(localStorage.getItem("id_paciente"));
    this.service.addHistorial(this.historial,).subscribe(data => {
      alert("Se agrego la visita al Historial");
      this.router.navigate(["listarHistorial"]);
    })
  }

}

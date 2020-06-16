import { Component, OnInit } from '@angular/core';
import { Historial } from 'src/app/Modelo/Historial';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';

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
    let id = localStorage.getItem("id");
    this.service.addHistorial(this.historial, +id).subscribe(data => {
      alert("Se agrego la visita al Historial");
      this.router.navigate(["listarHistorial"]);
    })
  }

}

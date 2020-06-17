import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Historial } from 'src/app/Modelo/Historial';

@Component({
  selector: 'app-edit-historial',
  templateUrl: './edit-historial.component.html',
  styleUrls: ['./edit-historial.component.css']
})
export class EditHistorialComponent implements OnInit {

  historial: Historial = new Historial();

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar() {
    console.log(localStorage);
    let id = localStorage.getItem("id_hist");
    this.service.getHistorialId(+id).subscribe(data => {
      this.historial = data;
    })
  }

  Actualizar(historial: Historial) {
    let id = localStorage.getItem("id_hist");
    this.service.updateHistorial(historial, +id).subscribe(data => {
      this.historial = data;
      alert("Se actualizo el historial con exito");
      this.router.navigate(["listarHistorial"]);
    })

  }
}

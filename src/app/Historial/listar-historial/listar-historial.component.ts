import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/Modelo/Paciente';
import { Historial } from 'src/app/Modelo/Historial';

@Component({
  selector: 'app-listar-historial',
  templateUrl: './listar-historial.component.html',
  styleUrls: ['./listar-historial.component.css']
})
export class ListarHistorialComponent implements OnInit {

  paciente: Paciente = new Paciente();
  displayedColumns: string[] = ['id', 'descripcion', 'fecha', 'acciones'];
  historiales: Historial[];

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.fetchHistoriales();
  }

  fetchHistoriales() {
    let id = localStorage.getItem("id_paciente");
    this.service.getPacienteId(+id).subscribe(data => {
      this.historiales = data.historiales;
    })
  }
  AddHistorial() {
    this.router.navigate(["addHistorial"]);
  }

  BorrarHistorial(historial: Historial) {
    this.service.deleteHistorial(historial).subscribe(data => {
      this.historiales = this.historiales.filter(p => p !== historial);
      alert("Usuario eliminado");

    })
  }

  EditHistorial(historial: Historial) {
    localStorage.setItem("id_hist", historial.id_historial.toString());
    this.router.navigate(["editHistorial"]);
  }
  Volver() {
    this.router.navigate(["listarPaciente"])
  }
  VolverPrincipal() {
    this.router.navigate(["listarHospital"]);
  }
}

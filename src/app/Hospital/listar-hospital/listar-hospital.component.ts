import { Component, OnInit, Inject } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Hospital } from 'src/app/Modelo/Hospital';
import { Especialidad } from 'src/app/Modelo/Especialidad';
import { Paciente } from 'src/app/Modelo/Paciente';

@Component({
  selector: 'app-listar-hospital',
  templateUrl: './listar-hospital.component.html',
  styleUrls: ['./listar-hospital.component.css']
})
export class ListarHospitalComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'acciones'];
  displayedColumnsEspecialidad: string[] = ['id', 'name', 'acciones'];
  hospitales: Hospital[];
  especialidades: Especialidad[];
  pacientes: Paciente[];
  nombreHospital: string;
  filtroNombre: String;

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getHospitales().subscribe(data => {
      this.hospitales = data;
    })
    this.fetchEspecialidad();
    this.fetchPacientes();
  }

  applyFilter() {
    if (this.filtroNombre != "") {
      this.hospitales = this.hospitales.filter(res => {
        return res.nombre.toLocaleLowerCase().match(this.filtroNombre.toLocaleLowerCase());
      })
    } else if (this.filtroNombre == "") {
      this.ngOnInit();
    }
  }

  AddHospital() {
    this.router.navigate(["addHospital"])
  }
  EditHospital(hospital: Hospital) {
    localStorage.setItem("id_hospital", hospital.id_hospital.toString());
    this.router.navigate(["editHospital"]);
  }
  BorrarHospital(hospital: Hospital) {
    this.service.deleteHospital(hospital).subscribe(data => {
      this.hospitales = this.hospitales.filter(p => p != hospital);
      alert("Hospital eliminado");
    })
  }

  fetchEspecialidad() {
    let id = localStorage.getItem("id_hospital");
    this.service.getHospitalId(+id).subscribe(data => {
      this.especialidades = data.especialidades;
      this.nombreHospital = data.nombre;
    })
  }

  fetchPacientes() {
    let id = localStorage.getItem("id_hospital");
    this.service.getHospitalId(+id).subscribe(data => {
      this.pacientes = data.pacientes;
    })
  }

  detalleHospital(hospital: Hospital) {
    localStorage.setItem("id_hospital", hospital.id_hospital.toString());
    this.ngOnInit();
  }

  AddEspecialidad() {
    this.router.navigate(["addEspecialidad"]);
  }
  AddPaciente() {
    this.router.navigate(["addPaciente"]);
  }

  detallePaciente(){
    this.router.navigate(["listarPaciente"]);
  }
  detalleEspecialidad(){
    this.router.navigate(["listarEspecialidad"]);
  }
  MostrarHistorial(paciente:Paciente){
    localStorage.setItem("id_paciente",paciente.id_paciente.toString());
    this.router.navigate(["listarHistorial"]);
  }
  MostrarDoctor(especialidad:Especialidad){
    localStorage.setItem("id_especialidad",especialidad.id_especialidad.toString());
    this.router.navigate(["listarDoctor"]);
  }


}

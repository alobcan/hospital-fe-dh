import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { from } from 'rxjs';
import { Paciente } from '../Modelo/Paciente';
import { Doctor } from '../Modelo/Doctor';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http: HttpClient) { }

  UrlPacientes = 'http://localhost:8080/test-server/pacientes';
  UrlDoctores = 'http://localhost:8080/test-server/doctores';

  getPacientes() {
    return this.http.get<Paciente[]>(this.UrlPacientes);
  }
  createPaciente(paciente: Paciente) {
    return this.http.post<Paciente>(this.UrlPacientes, paciente);
  }
  getPacienteId(id: number) {
    return this.http.get<Paciente>(this.UrlPacientes + "/" + id);
  }
  updatePaciente(paciente: Paciente) {
    return this.http.put<Paciente>(this.UrlPacientes + "/" + paciente.id, paciente);
  }
  deletePaciente(paciente: Paciente) {
    return this.http.delete<Paciente>(this.UrlPacientes + "/" + paciente.id);
  }

  getDoctores() {
    return this.http.get<Doctor[]>(this.UrlDoctores);
  }
  createDoctor(doctor: Doctor) {
    return this.http.post<Doctor>(this.UrlDoctores, doctor);
  }
  getDoctorId(id: number) {
    return this.http.get<Paciente>(this.UrlDoctores + "/" + id);
  }
  updateDoctor(doctor: Doctor) {
    return this.http.put<Doctor>(this.UrlDoctores + "/" + doctor.id, doctor);
  }
  deleteDoctor(doctor: Doctor) {
    return this.http.delete<Doctor>(this.UrlDoctores + "/" + doctor.id);
  }
}

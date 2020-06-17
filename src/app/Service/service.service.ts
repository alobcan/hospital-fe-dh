import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Paciente } from '../Modelo/Paciente';
import { Doctor } from '../Modelo/Doctor';
import { Historial } from '../Modelo/Historial';
import { Especialidad } from '../Modelo/Especialidad';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http: HttpClient) { }

  Url = 'http://localhost:8080/test-server';

  getPacientes() {
    return this.http.get<Paciente[]>(this.Url + "/pacientes");
  }
  createPaciente(paciente: Paciente) {
    return this.http.post<Paciente>(this.Url + "/pacientes", paciente);
  }
  getPacienteId(id: number) {
    return this.http.get<Paciente>(this.Url + "/pacientes/" + id);
  }
  updatePaciente(paciente: Paciente) {
    return this.http.put<Paciente>(this.Url + "/pacientes/" + paciente.id_paciente, paciente);
  }
  deletePaciente(paciente: Paciente) {
    return this.http.delete<Paciente>(this.Url + "/pacientes/" + paciente.id_paciente);
  }

  getDoctores() {
    return this.http.get<Doctor[]>(this.Url + "/doctores");
  }
  createDoctor(doctor: Doctor, id: number) {
    return this.http.post<Especialidad>(this.Url + "/especialidades/" + id, doctor);
  }
  getDoctorId(id: number) {
    return this.http.get<Doctor>(this.Url + "/doctores/" + id);
  }
  updateDoctor(doctor: Doctor) {
    return this.http.put<Doctor>(this.Url + "/doctores/" + doctor.id_doctor, doctor);
  }
  deleteDoctor(doctor: Doctor) {
    return this.http.delete<Doctor>(this.Url + "/doctores/" + doctor.id_doctor);
  }

  getHistorial(){
    return this.http.get<Historial[]>(this.Url + "/historiales");
  }
  addHistorial(historial: Historial, id: number) {
    return this.http.post<Paciente>(this.Url + "/pacientes/" + id, historial);
  }
  getHistorialId(id: number) {
    return this.http.get<Historial>(this.Url + "/historiales/" + id);
  }
  updateHistorial(historial: Historial, id: number) {
    return this.http.put<Historial>(this.Url + "/historiales/" + id, historial);
  }
  deleteHistorial(historial: Historial) {
    return this.http.delete<Historial>(this.Url + "/historiales/" + historial.id_historial);
  }

  getEspecialidades() {
    return this.http.get<Especialidad[]>(this.Url + "/especialidades");
  }
  createEspecialidad(especialidad: Especialidad) {
    return this.http.post<Especialidad>(this.Url + "/especialidades", especialidad);
  }
  getEspecialidadId(id: number) {
    return this.http.get<Especialidad>(this.Url + "/especialidades/" + id);
  }
  updateEspecialidad(especialidad:Especialidad) {
    return this.http.put<Especialidad>(this.Url + "/especialidades/" + especialidad.id_especialidad, especialidad);
  }
  deleteEspecialidad(especialidad:Especialidad) {
    return this.http.delete<Especialidad>(this.Url + "/especialidades/" + especialidad.id_especialidad);
  }
  
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { from } from 'rxjs';
import { Paciente } from '../Modelo/Paciente';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http: HttpClient) { }

  Url = 'http://localhost:8080/test-server/pacientes';

  getPacientes() {
    return this.http.get<Paciente[]>(this.Url);
  }
  createPaciente(paciente: Paciente) {
    return this.http.post<Paciente>(this.Url, paciente);
  }
  getPacienteId(id: number) {
    return this.http.get<Paciente>(this.Url + "/" + id);
  }
  updatePaciente(paciente: Paciente) {
    return this.http.put<Paciente>(this.Url + "/" + paciente.id, paciente);
  }
  deletePaciente(paciente: Paciente) {
    return this.http.delete<Paciente>(this.Url + "/" + paciente.id);
  }
}

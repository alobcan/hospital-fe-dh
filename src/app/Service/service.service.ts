import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { from } from 'rxjs';
import { Paciente } from '../Modelo/Paciente';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  
  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/hospital-app/pacientes';

  getPacientes(){
    return this.http.get<Paciente[]>(this.Url);
  }
}

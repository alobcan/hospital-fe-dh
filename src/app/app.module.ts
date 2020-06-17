import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from './Service/service.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AddPacienteComponent } from './Paciente/add-paciente/add-paciente.component';
import { ListarPacienteComponent } from './Paciente/listar-paciente/listar-paciente.component';
import { EditPacienteComponent } from './Paciente/edit-paciente/edit-paciente.component';
import { EditDoctorComponent } from './Doctor/edit-doctor/edit-doctor.component';
import { AddDoctorComponent } from './Doctor/add-doctor/add-doctor.component';
import { ListarDoctorComponent } from './Doctor/listar-doctor/listar-doctor.component';
import { AddHistorialComponent } from './Historial/add-historial/add-historial.component';
import { EditHistorialComponent } from './Historial/edit-historial/edit-historial.component';
import { ListarHistorialComponent } from './Historial/listar-historial/listar-historial.component';
import { AddEspecialidadComponent } from './Especialidad/add-especialidad/add-especialidad.component';
import { EditEspecialidadComponent } from './Especialidad/edit-especialidad/edit-especialidad.component';
import { ListarEspecialidadComponent } from './Especialidad/listar-especialidad/listar-especialidad.component'
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { AddHospitalComponent } from './Hospital/add-hospital/add-hospital.component';
import { EditHospitalComponent } from './Hospital/edit-hospital/edit-hospital.component';
import { ListarHospitalComponent } from './Hospital/listar-hospital/listar-hospital.component';





@NgModule({
  declarations: [
    AppComponent,
    AddPacienteComponent,
    ListarPacienteComponent,
    EditPacienteComponent,
    EditDoctorComponent,
    AddDoctorComponent,
    ListarDoctorComponent,
    AddHistorialComponent,
    EditHistorialComponent,
    ListarHistorialComponent,
    AddEspecialidadComponent,
    EditEspecialidadComponent,
    ListarEspecialidadComponent,
    AddHospitalComponent,
    EditHospitalComponent,
    ListarHospitalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

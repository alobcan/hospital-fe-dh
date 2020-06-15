import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPacienteComponent } from './Paciente/add-paciente/add-paciente.component';
import { ListarPacienteComponent } from './Paciente/listar-paciente/listar-paciente.component';
import { EditPacienteComponent } from './Paciente/edit-paciente/edit-paciente.component';
import { ListarDoctorComponent } from './Doctor/listar-doctor/listar-doctor.component';
import { AddDoctorComponent } from './Doctor/add-doctor/add-doctor.component';
import { EditDoctorComponent } from './Doctor/edit-doctor/edit-doctor.component';


const routes: Routes = [
  {path:'listarPaciente', component:ListarPacienteComponent},
  {path:'addPaciente', component:AddPacienteComponent},
  {path:'editPaciente', component:EditPacienteComponent},
  {path:'listarDoctor', component:ListarDoctorComponent},
  {path:'addDoctor', component:AddDoctorComponent},
  {path:'editDoctor', component:EditDoctorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

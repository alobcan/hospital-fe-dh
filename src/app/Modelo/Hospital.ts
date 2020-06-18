import { Paciente } from './Paciente';
import { Especialidad } from './Especialidad';

export class Hospital{
    id_hospital:number;
    nombre:string;
    pacientes: Paciente[];
    especialidades: Especialidad[];
    created_by: string;
    updated_by: string;
}
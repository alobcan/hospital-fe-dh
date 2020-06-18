import { Paciente } from './Paciente';
import { Especialidad } from './Especialidad';

export class Hospital{
    id_hospital:number;
    nombre:string;
    pacientes: Paciente[];
    especialidades: Especialidad[];
    createdBy: string;
    updatedBy: string;
    updatedAt: Date;
}
import { Doctor } from './Doctor';

export class Especialidad {
    id_especialidad: number;
    nombre: string;
    descripcion: string;
    doctores: Doctor[];
    id_ref:number;
    created_by: string;
    updated_by: string;
}
import { Doctor } from './Doctor';

export class Especialidad {
    id_especialidad: number;
    nombre: string;
    descripcion: string;
    doctores: Doctor[];
}
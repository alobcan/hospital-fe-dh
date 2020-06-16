import { Historial } from './Historial';

export class Paciente {
    id_paciente: number;
    nombre: String;
    apellido: String;
    fecha_nacimiento: Date;
    direccion: String;
    historiales: Historial[];
}
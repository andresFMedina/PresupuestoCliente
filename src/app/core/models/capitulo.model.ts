import { Proyecto } from './proyecto.model';
export interface Capitulo {
    id: number;
    numero: number;
    descripcion: string;
    proyecto?: Proyecto;
    proyectoId: number;
    subtotal: number;
}

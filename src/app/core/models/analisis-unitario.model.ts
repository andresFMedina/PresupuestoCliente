import { Detalle } from './detalle';
import { Proyecto } from './proyecto.model';

export interface AnalisisUnitario {
    id: number;
    proyectoId: number;
    proyecto?: Proyecto;
    codigo: string;
    descripcion: string;
    unidad: string;
    grupo?: string;
    clasificacion?: string;
    valorUnitario: number;
    detalles: Detalle[];
}

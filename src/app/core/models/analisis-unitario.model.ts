import { Detalle } from './detalle';
import { Grupo } from './grupo.model';
import { Proyecto } from './proyecto.model';

export interface AnalisisUnitario {
    id: number;
    proyectoId: number;
    proyecto?: Proyecto;
    codigo: string;
    descripcion: string;
    unidad: string;
    grupo?: Grupo;
    clasificacion?: string;
    valorUnitario: number;
    detalles: Detalle[];
}

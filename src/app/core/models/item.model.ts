import { Capitulo } from './capitulo.model';
import { Detalle } from './detalle';
import { Proyecto } from './proyecto.model';

export interface Item {
    id: number;
    proyectoId: number;
    proyecto?: Proyecto;
    codigo: string;
    descripcion: string;
    unidad: string;
    cantidad: number;
    frente?: number;
    actividad?: number;
    aporte: string;
    detalles: Detalle[];
    valorUnitario: number;
    valorParcial?: number;
    numeroCapitulo?: number;
    capitulo?: Capitulo;
    capituloId?: number;
}

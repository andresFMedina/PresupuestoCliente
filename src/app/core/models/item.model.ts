import { Capitulo } from './capitulo.model';
import { Detalle } from './detalle';
import { Proyecto } from './proyecto.model';
import { CostosMateriales } from './costos-materiales.interface';

export interface Item extends CostosMateriales {
    id: number;
    proyectoId: number;
    proyecto?: Proyecto;
    codigo: string;
    descripcion: string;
    unidad: string;
    cantidad: number;
    frente?: number;
    actividad?: number;
    aporte: number;
    detalles: Detalle[];
    valorUnitario: number;
    valorParcial?: number;
    numeroCapitulo?: number;
    capitulo?: Capitulo;
    capituloId?: number;
}

import { CostosMateriales } from './costos-materiales.interface';
import { Detalle } from './detalle';
import { Proyecto } from './proyecto.model';

export interface AnalisisUnitario extends CostosMateriales {
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
    costoMateriales: number;
    costoEquipo: number;
    costoManoObra: number;
}

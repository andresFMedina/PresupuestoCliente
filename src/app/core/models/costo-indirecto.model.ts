import { Proyecto } from './proyecto.model';
export interface CostoIndirecto {
    id: number;
    descripcion: string;
    porcentaje: number;
    proyectoId: number;
    proyecto?: Proyecto;
}

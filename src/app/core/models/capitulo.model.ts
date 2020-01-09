import { Proyecto } from './proyecto.model';
import { CostosMateriales } from './costos-materiales.interface';
export interface Capitulo extends CostosMateriales {
    id: number;
    numero: number;
    descripcion: string;
    proyecto?: Proyecto;
    proyectoId: number;
    subtotal: number;
}

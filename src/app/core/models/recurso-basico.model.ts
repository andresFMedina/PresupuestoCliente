import { Grupo } from './grupo.model';
export interface RecursoBasico {
    id?: number;
    codigo: string;
    descripcion: string;
    unidad: string;
    grupo?: Grupo;
    clasificacion?: string;
    precio: number;
    fecha?: string;
}

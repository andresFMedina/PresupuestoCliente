import { Grupo } from './grupo.model';
export interface Proyecto {
    id?: number;
    nombre_Obra: string;
    contratante: string;
    proponente: string;
    fecha_Presentacion: string;
    fecha_Modificacion: string;
    comentarios: string;
    porcentaje_Menor: number;
    porcentaje_Prestaciones_Sociales: number;
    desperdicio_Materiales: number;
    grupos?: Grupo[];
}

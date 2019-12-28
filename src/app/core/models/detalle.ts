import { Item } from './item.model';
import { AnalisisUnitario } from './analisis-unitario.model';

export interface Detalle {
    id: number;
    analisisUnitarioId?: number;
    analisisUnitario?: AnalisisUnitario;
    itemId?: number;
    item?: Item;
    rendimiento: number;
    codigo: string;
    descripcion: string;
    unidad: string;
    precio: number;
    grupo?: string;
    desperdicio: number;
    detalleDe: string;
    subTotal?: number;
}

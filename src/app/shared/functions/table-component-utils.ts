import { RecursoBasico } from 'src/app/core/models/recurso-basico.model';
import { Detalle } from 'src/app/core/models/detalle';
import { AnalisisUnitario } from 'src/app/core/models/analisis-unitario.model';

export function recursoBasicoADetalle(recurso: RecursoBasico, itemId?: number, analisisUnitarioId?: number): Detalle {
    const detalle: Detalle = {
        id: 0,
        itemId: (itemId) ? itemId : 0,
        analisisUnitarioId: (analisisUnitarioId) ? analisisUnitarioId : 0,
        codigo: recurso.codigo,
        descripcion: recurso.descripcion,
        unidad: recurso.unidad,
        precio: recurso.precio,
        rendimiento: 1,
        grupo: recurso.grupo,
        desperdicio: 0.0,
        detalleDe: 'recurso',
        subTotal: recurso.precio
    };
    return detalle;
}

export function analisisUnitarioADetalle(analysis: AnalisisUnitario, itemId?: number, analisisUnitarioId?: number): Detalle {
    const detalle: Detalle = {
        id: 0,
        itemId: (itemId) ? itemId : 0,
        analisisUnitarioId: (analisisUnitarioId) ? analisisUnitarioId : 0,
        codigo: analysis.codigo,
        descripcion: analysis.descripcion,
        unidad: analysis.unidad,
        precio: analysis.valorUnitario,
        rendimiento: 1,
        desperdicio: 0,
        detalleDe: 'analisis',
        subTotal: analysis.valorUnitario,
    };
    return detalle;
}

import { Detalle } from './../models/detalle';
import { calcularSubtotalDetalle } from './calcular-costos';
export function AdaptDetail(object: any): Detalle[] {
    let detalles: Detalle[] = [];

    const detalle: Detalle = {
        codigo: object.codigo,
        descripcion: object.descripcion,
        desperdicio: 0,
        detalleDe: '',
        id: 0,
        precio: object.valorUnitario,
        rendimiento: (object.cantidad) ? object.cantidad : 0,
        unidad: object.unidad,
        grupo: object.grupo
    };
    detalles.push(detalle);
    detalles = detalles.concat(object.detalles);
    detalles.forEach(d => calcularSubtotalDetalle(d));
    console.log(detalles);


    console.log(detalles);
    return detalles;
}

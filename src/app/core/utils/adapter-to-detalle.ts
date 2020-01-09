import { Detalle } from './../models/detalle';
export function AdaptDetail(object: any): Detalle[] {
    let detalles: Detalle[] = [];

    const detalle: Detalle = {
        codigo: object.codigo,
        descripcion: object.descripcion,
        desperdicio: 0,
        detalleDe: '',
        id: 0,
        precio: object.valorUnitario,
        rendimiento: 0,
        unidad: object.unidad,
        grupo: object.grupo
    };
    detalles.push(detalle);
    detalles = detalles.concat(object.detalles);
    console.log(detalles);


    console.log(detalles);
    return detalles;
}

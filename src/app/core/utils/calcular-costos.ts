import { Item } from './../models/item.model';
import { grupos } from './../constants';
import { CostosMateriales } from './../models/costos-materiales.interface';
import { Detalle } from './../models/detalle';

export function calcularCostoMaterialesDetalles(detalles: Detalle[]): CostosMateriales {

    const costoMateriales = detalles.map(d => (d.grupo === grupos[0].codigo) ? d.subTotal : 0)
        .reduce((acc, value) => acc + value, 0);
    const costoManoObra = detalles.map(d => (d.grupo === grupos[1].codigo) ? d.subTotal : 0)
        .reduce((acc, value) => acc + value, 0);
    const costoEquipo = detalles.map(d => (d.grupo === grupos[2].codigo) ? d.subTotal : 0)
        .reduce((acc, value) => acc + value, 0);

    const costos: CostosMateriales = {
        costoMateriales,
        costoManoObra,
        costoEquipo
    };

    return costos;
}

export function calcularCostoMaterialesItems(items: Item[]): CostosMateriales {

    const costoMateriales = items.map(i => i.costoMateriales)
        .reduce((acc, value) => acc + value, 0);
    const costoManoObra = items.map(i => i.costoManoObra)
        .reduce((acc, value) => acc + value, 0);
    const costoEquipo = items.map(i => i.costoEquipo)
        .reduce((acc, value) => acc + value, 0);

    const costos: CostosMateriales = {
        costoMateriales,
        costoManoObra,
        costoEquipo
    };

    return costos;
}

export function calcularSubtotalDetalle(detalle: Detalle) {
    detalle.subTotal = detalle.rendimiento * detalle.precio;
}


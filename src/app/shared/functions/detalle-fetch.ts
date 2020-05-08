import { Detalle } from 'src/app/core/models/detalle';
import { DetalleService } from 'src/app/core/services/detalle/detalle.service';

export function postDetalle(detalleService: DetalleService, detalle: Detalle, id: number) {
    detalle.itemId = id;
    detalleService.postDetalle(detalle).subscribe(
        (resp) => {
            console.log(resp);
        },
        (error) => {
            console.log(error.error);
        }
    );
}

export function putDetalle(detalleService: DetalleService, detalle: Detalle) {
    detalleService.putDetalle(detalle).subscribe(
        (resp) => {
            console.log(resp);
        },
        (error) => {
            console.log(error.error);
        }
    );
}

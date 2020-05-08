import { MatSnackBar } from '@angular/material';

export function createDefaultSnackbar(snackbar: MatSnackBar, message: string) {
    snackbar.open(message, 'OK', {
        duration: 2000
    });
}

import { Injectable } from '@angular/core';
import { SnackbarType } from '../components/snackbar/snackbar.component';
import { Subject } from 'rxjs';

@Injectable()
export class SnackbarService {
    private snackbarSubject = new Subject<any>();
    public snackbarState = this.snackbarSubject.asObservable();

    constructor() {}

    show(message: string, type?: SnackbarType) {
        this.snackbarSubject.next({
            show: true,
            message,
            type,
        });
    }
}

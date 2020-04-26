import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SnackbarService } from '../../services/snackbar.service';
import { animate, style, transition, trigger } from '@angular/animations';

export type SnackbarType = 'success' | 'error';

@Component({
    selector: 'app-snackbar',
    templateUrl: './snackbar.component.html',
    styleUrls: ['./snackbar.component.scss'],
    animations: [
        trigger('state', [
            transition(':enter', [
                style({ bottom: '-100px', transform: 'translate(-50%, 0%) scale(0.3)' }),
                animate(
                    '150ms cubic-bezier(0, 0, 0.2, 1)',
                    style({
                        transform: 'translate(-50%, 0%) scale(1)',
                        opacity: 1,
                        bottom: '10px',
                    })
                ),
            ]),
            transition(':leave', [
                animate(
                    '150ms cubic-bezier(0.4, 0.0, 1, 1)',
                    style({
                        transform: 'translate(-50%, 0%) scale(0.3)',
                        opacity: 0,
                        bottom: '-100px',
                    })
                ),
            ]),
        ]),
    ],
})
export class SnackbarComponent implements OnInit, OnDestroy {
    show = false;
    message = 'This is an awesome snackbar';
    type: SnackbarType = 'success';
    snackbarSubscription: Subscription;

    constructor(private snackbarService: SnackbarService) {}

    ngOnInit(): void {
        this.snackbarSubscription = this.snackbarService.snackbarState.subscribe(state => {
            this.type = state.type ? state.type : 'success';
            this.message = state.message;
            this.show = state.show;
            setTimeout(() => (this.show = false), 3000);
        });
    }

    ngOnDestroy(): void {
        this.snackbarSubscription.unsubscribe();
    }
}

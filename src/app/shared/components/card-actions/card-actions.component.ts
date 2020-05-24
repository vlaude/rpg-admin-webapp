import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-card-actions',
    templateUrl: './card-actions.component.html',
    styleUrls: ['./card-actions.component.scss'],
})
export class CardActionsComponent implements OnInit {
    @Input() form: FormGroup;
    @Output() submitClicked = new EventEmitter<FormGroup>();
    @Output() cancelClicked = new EventEmitter<void>();

    constructor() {}

    ngOnInit(): void {}
}

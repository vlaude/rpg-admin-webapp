import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DamageTypeModel } from '../../models/damage-type.model';

@Component({
    selector: 'app-damage-type-card',
    templateUrl: './damage-type-card.component.html',
    styleUrls: ['./damage-type-card.component.scss'],
})
export class DamageTypeCardComponent implements OnInit {
    @Input() damageType: DamageTypeModel;
    @Output() edit = new EventEmitter<void>();
    @Output() delete = new EventEmitter<void>();

    constructor() {}

    ngOnInit(): void {}
}

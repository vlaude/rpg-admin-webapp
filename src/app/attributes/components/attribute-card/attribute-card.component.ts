import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AttributeModel } from '../../models/attribute.model';

@Component({
    selector: 'app-attribute-card',
    templateUrl: './attribute-card.component.html',
    styleUrls: ['./attribute-card.component.scss'],
})
export class AttributeCardComponent implements OnInit {
    @Input() attribute: AttributeModel;
    @Output() edit = new EventEmitter<void>();
    @Output() delete = new EventEmitter<void>();

    constructor() {}

    ngOnInit(): void {}
}

import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-popover-edit-delete',
    templateUrl: './popover-edit-delete.component.html',
    styleUrls: ['./popover-edit-delete.component.scss'],
})
export class PopoverEditDeleteComponent implements OnInit {
    @Output() editClicked = new EventEmitter<void>();
    @Output() deleteClicked = new EventEmitter<void>();

    show = false;
    faPen = faPen;
    faTrash = faTrash;

    constructor(public elRef: ElementRef) {}

    ngOnInit(): void {
        this.elRef.nativeElement.parentElement.addEventListener('click', () => {
            this.show = !this.show;
        });
    }
}

import { Component, OnInit } from '@angular/core';
import { AlterationModel, AlterationType } from '../../models/alteration.model';
import { ModalService } from '../../../_modal';
import { DamageTypeModel } from '../../../damage-types/models/damage-type.model';
import { AttributeModel } from '../../models/attribute.model';
import { DamageTypeDataService } from '../../../damage-types/services/damage-type-data.service';
import { AttributeDataService } from '../../services/attribute-data.service';

@Component({
    selector: 'app-alteration-form',
    templateUrl: './alteration-form.component.html',
    styleUrls: ['./alteration-form.component.scss'],
})
export class AlterationFormComponent implements OnInit {
    newAlterations: AlterationModel[] = [];
    newAlterationType: AlterationType;
    newAlterationProperty: string;
    alterationPropertiesOptions: DamageTypeModel[] | AttributeModel[];

    constructor(
        private modalService: ModalService,
        private damageTypeDataService: DamageTypeDataService,
        private attributeDataService: AttributeDataService
    ) {}

    ngOnInit(): void {}

    openAddAlterationModal() {
        this.modalService.open('add-alteration-modal');
    }

    onAlterationTypeChange(event) {
        switch (event.target.value) {
            case 'DamageType':
                this.alterationPropertiesOptions = this.damageTypeDataService.damageTypes;
                break;
            case 'Attribute':
                this.alterationPropertiesOptions = this.attributeDataService.attributes;
                break;
            case 'Ability':
                this.alterationPropertiesOptions = [];
                break;
            default:
                this.alterationPropertiesOptions = [];
                break;
        }
    }
}

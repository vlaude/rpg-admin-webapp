import { Component, OnInit } from '@angular/core';
import { AlterationModel, AlterationType } from '../../models/alteration.model';
import { ModalService } from '../../../_modal';
import { DamageTypeModel } from '../../../damage-types/models/damage-type.model';
import { AttributeModel } from '../../models/attribute.model';
import { DamageTypeDataService } from '../../../damage-types/services/damage-type-data.service';
import { AttributeDataService } from '../../services/attribute-data.service';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-alteration-form',
    templateUrl: './alteration-form.component.html',
    styleUrls: ['./alteration-form.component.scss'],
})
export class AlterationFormComponent implements OnInit {
    newAlterations: Omit<AlterationModel, 'id'>[] = [];
    newAlterationType: AlterationType;
    newAlterationProperty: string;
    newAlterationValue = 0;
    alterationPropertiesOptions: DamageTypeModel[] | AttributeModel[];

    faPlus = faPlus;

    constructor(
        private modalService: ModalService,
        private damageTypeDataService: DamageTypeDataService,
        private attributeDataService: AttributeDataService
    ) {}

    ngOnInit(): void {}

    openAddAlterationModal() {
        this.modalService.open('add-alteration-modal');
    }

    closeAddAlterationModal() {
        this.modalService.close('add-alteration-modal');
    }

    addAlteration() {
        const newAlteration: Omit<AlterationModel, 'id'> = {
            type: this.newAlterationType,
            value: this.newAlterationValue,
            property: this.newAlterationProperty,
        };
        this.newAlterations.push(newAlteration);
        this.newAlterationType = null;
        this.newAlterationProperty = null;
        this.newAlterationValue = 0;
        this.closeAddAlterationModal();
    }

    /**
     * Change alteration properties options according to the alteration type selected.
     * @param event type input select
     */
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

    removeAlteration(alteration: Omit<AlterationModel, 'id'>) {
        const index = this.newAlterations.indexOf(alteration);
        this.newAlterations.splice(index, 1);
    }
}

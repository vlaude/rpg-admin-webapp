export type AlterationType = 'DamageType' | 'PowerSource' | 'Ability';

export interface AlterationModel {
    type: AlterationType;
    value: number;
    property: string;
}

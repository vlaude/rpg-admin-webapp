import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'notEditing',
    pure: false,
})
export class NotEditingPipe implements PipeTransform {
    transform(values: any[], id: string): any {
        if (!values || !id) {
            return values;
        }

        return values.filter(v => v.id !== id);
    }
}

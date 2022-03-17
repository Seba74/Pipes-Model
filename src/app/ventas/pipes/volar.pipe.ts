import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'vuela'  
})
export class VolarPipe implements PipeTransform {
    transform(volar: boolean): string {
        return (volar)? 'Vuela': 'No Vuela';
    }
}
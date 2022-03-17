import { Component} from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.scss']
})
export class NumerosComponent{
  numeroEntero: number = 21516512.4512;
  porcentaje: number = 0.82;
}

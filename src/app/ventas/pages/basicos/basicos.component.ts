import { Component} from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss']
})
export class BasicosComponent{

  nombreLower: string = 'sebastian';
  nombreUpper: string = 'SEBASTIAN';
  nombreCompleto: string = 'Sebastian Guevara';

  fecha: Date = new Date();
}
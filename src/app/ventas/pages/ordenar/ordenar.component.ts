import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.scss']
})
export class OrdenarComponent{
  name: string = 'Sebastian';
  esMayusculas: boolean = true;
  case: string = 'minúscula';
  ordenarPor: string = ' ';
  data: string[] = ['nombre', 'volar', 'color']
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    { 
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Mujer Maravilla',
      vuela: true,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.azul
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    }
  ]
  cambiarMayus(){
    if(this.esMayusculas){
      this.esMayusculas = false;
      this.case = 'mayúscula'
    }else{
      this.esMayusculas = true;
      this.case = 'minúscula'
    }
  }
  ordenarValor(value: string){
    if(this.ordenarPor === 'sin valor'){
      this.ordenarPor = value;
    }else{
      this.ordenarPor = value;
    }
  }
}

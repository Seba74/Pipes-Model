import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.scss']
})
export class NoComunesComponent{
  nombre: string = 'Fernando';
  genero: string = 'masculino';
  invitacionMap = {
    'masculino' : 'invitarlo',
    'femenino' : 'invitarla'
  }
  clientes: string[] = ['Carla', 'Maria','José', 'Lucas', 'Laura', 'Andrea', 'Rafael', 'Juan'];
  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    'other': `tenemos # clientes esperando.`
  }

  persona = {
    nombre: 'Juan',
    edad: 25,
    direccion: 'Ottawa, Canadá'
  }

  cambiarCliente(){
    this.nombre = 'Andrea';
    this.genero = 'femenino'
  } 

  borrarCliente(){
    this.clientes.pop();
  }
}

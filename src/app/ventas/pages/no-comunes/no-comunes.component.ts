import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css'],
})
export class NoComunesComponent implements OnInit {
  //i18nSelect
  nombre: string = 'Manolito';
  genero: string = 'masculino';

  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Ana', 'Mateo'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarCliente() {
    this.nombre = 'Saturnina';
    this.genero = 'femenino';
  }

  borrarCliente() {
    this.clientes.pop();
  }

  //KeyValue pipe
  persona = {
    nombre:'Manolito',
    edad: 25,
    direccion: 'Kenston, Prusia'
  }

  // JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre:'Aquaman',
      vuela: false,
    }
  ]

  // Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject) =>{
      setTimeout(() => {
        resolve('Tenemos data de promesa');
      }, 3000);
  })

  constructor() {}

  ngOnInit(): void {}
}

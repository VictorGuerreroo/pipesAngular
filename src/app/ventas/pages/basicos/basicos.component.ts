import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  nombreLower: string = "manolito";
  nombreUpper: string = "CARACOLITO";
  nombreCompleto: string = "mAnolIto cAraCOlito";

  fecha: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}

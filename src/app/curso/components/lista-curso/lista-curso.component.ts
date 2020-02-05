import { Component, OnInit } from '@angular/core';
import { Curso } from '../../models';

@Component({
  selector: 'app-lista-curso',
  templateUrl: './lista-curso.component.html',
  styleUrls: ['./lista-curso.component.css']
})
export class ListaCursoComponent implements OnInit {
  // listaCursos:string[]=['javascript','laravel','php'];
  cursoSeleccionado:string;
  listaCursos:Curso[]=[
    {
      nombre: 'Angular',
      descripcion:'Angular es un framework',
      imgUrl:'https://static8.depositphotos.com/1052928/952/i/450/depositphotos_9520406-stock-photo-duck-white.jpg'
    },
    {
      nombre: 'PHP',
      descripcion:'Php es un codigo',
      imgUrl:'https://static8.depositphotos.com/1052928/952/i/450/depositphotos_9520406-stock-photo-duck-white.jpg'
    },
    {
      nombre: 'Python',
      descripcion:'Python es un codigo',
      imgUrl:'https://static8.depositphotos.com/1052928/952/i/450/depositphotos_9520406-stock-photo-duck-white.jpg'
    }
  ];
  constructor() { }

  ngOnInit() {
  }
  recibirNombre(nombreCurso: string): void{
    console.log('Recibiendo datos del hijo: ',nombreCurso);
    this.cursoSeleccionado=nombreCurso;
  }
  recibirCurso(nuevoCurso: Curso):void{
    console.log("recibiendo curso del hijo: ",nuevoCurso);
    this.listaCursos.push(nuevoCurso);
  }

}

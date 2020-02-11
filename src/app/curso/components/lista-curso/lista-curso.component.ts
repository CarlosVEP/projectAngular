import { Component, OnInit } from '@angular/core';
import { Curso } from '../../models';
import { CursoHttpService } from '../../services/curso-http.service';

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
  constructor(private cursoHttpService: CursoHttpService) { }

  ngOnInit() {
    this.cursoHttpService.getAllCursos().subscribe(
      (result)=>{//se ejecuta cuando se tuvo exito
        console.log('Result: ', result);
        this.listaCursos=result;
      },
      (error)=>{//se ejecuta cuando algo salio mal
        console.log('Ocurrio un error al ejecutarse: ', error);
      },
      ()=>{//complete, cuando se terminó de ejecutar el código
        console.log('Se terminó de ejecutar la función');
      }
    )
  }
  recibirNombre(nombreCurso: string): void{
    console.log('Recibiendo datos del hijo: ',nombreCurso);
    this.cursoSeleccionado=nombreCurso;
  }
  recibirCurso(nuevoCurso: Curso):void{
    console.log("recibiendo curso del hijo: ",nuevoCurso);
    this.listaCursos.push(nuevoCurso);
  }
  eliminarCurso(nombreCurso:string){
    let index=this.listaCursos.findIndex(x=>x.nombre===nombreCurso);
    console.log("curso a eliminar", nombreCurso+" index="+index);
    this.listaCursos.splice(index,1)
    // console.log("lista cursos elim",this.listaCursos.slice(index,1));
  }

}

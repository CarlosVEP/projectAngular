import { Injectable } from '@angular/core';
import { Curso } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoHttpService {
  listaCursos: Curso[]=[];
  constructor() { 
    this.fillCursos();
   }
  test():void{
    console.log('jeje');
  }
  getAllCursos():Observable<Curso[]>{
    const observableLista:Observable<Curso[]>=Observable.create((observer)=>{//const solo usado una vez no es reasignable
      setTimeout(()=>{
        observer.next(this.listaCursos);
        observer.complete();
      },3000);
    });
    return observableLista;
  }
  private fillCursos():void{
    this.listaCursos.push({
      nombre:"Vuej",
      descripcion:"curso de vuej",
      imgUrl:"https://i.imgur.com/scrcyJ3.png"
    });
    this.listaCursos.push({
      nombre:"Laravel",
      descripcion:"curso de vuej",
      imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png"
    });
    this.listaCursos.push({
      nombre:"Angular",
      descripcion:"curso de vuej",
      imgUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
    });
  }
  createCurso(curso:Curso):Observable<Curso[]>{
    const observableCreado:Observable<Curso[]>=Observable.create((observer)=>{
      if(!curso){
        observer.error(new Error('No se aceptan valores indefinidos'));
      }else{
        this.listaCursos.push(curso);
        observer.next(curso);
      }
      observer.complete();
    });
    return observableCreado;
  }
}

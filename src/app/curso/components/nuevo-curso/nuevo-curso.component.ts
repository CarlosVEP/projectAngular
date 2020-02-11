import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CursoHttpService } from '../../services/curso-http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-curso',
  templateUrl: './nuevo-curso.component.html',
  styleUrls: ['./nuevo-curso.component.css']
})
export class NuevoCursoComponent implements OnInit {

  form:FormGroup;
  constructor(private fb:FormBuilder, private cursoHttpService: CursoHttpService, private router:Router) { 
    this.form= this.fb.group({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      descripcion:new FormControl(''),
      imgUrl:new FormControl(''),
    })
  }

  ngOnInit() {
    this.cursoHttpService.test();
  }
  get nombre(): FormControl {
    return this.form.get('nombre') as FormControl;
  }
  crearCurso():void{
    console.log('valores del form: ', this.form.value);
    this.cursoHttpService.createCurso(this.form.value).subscribe(
      (result)=>{
        console.log("curso cread: ",result);
        this.router.navigate(["cursos/listacursos"]);
      },
      (error)=>{
        console.log("error: ", error)
      },
      ()=>{

      },
    );
  }
}

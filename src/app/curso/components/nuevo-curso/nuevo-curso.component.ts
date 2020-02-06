import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CursoHttpService } from '../../services/curso-http.service';

@Component({
  selector: 'app-nuevo-curso',
  templateUrl: './nuevo-curso.component.html',
  styleUrls: ['./nuevo-curso.component.css']
})
export class NuevoCursoComponent implements OnInit {

  form:FormGroup;
  constructor(private fb:FormBuilder, private cursoHttpService: CursoHttpService) { 
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
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-nuevo-curso',
  templateUrl: './nuevo-curso.component.html',
  styleUrls: ['./nuevo-curso.component.css']
})
export class NuevoCursoComponent implements OnInit {

  form:FormGroup;
  constructor(private fb:FormBuilder) { 
    this.form= this.fb.group({
      nombre:new FormControl(''),
      descripcion:new FormControl(''),
      imgUrl:new FormControl(''),
    })
  }

  ngOnInit() {
  }

}

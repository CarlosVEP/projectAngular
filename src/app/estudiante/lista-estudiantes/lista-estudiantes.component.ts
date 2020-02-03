import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-estudiantes',
  templateUrl: './lista-estudiantes.component.html',
  styleUrls: ['./lista-estudiantes.component.css']
})
export class ListaEstudiantesComponent implements OnInit {
  titulo:string='Lista de estudiantes.';
  curso:string="base de datos";
  urlImagen:string="https://www.ecoembes.com/sites/default/files/styles/500___auto/public/imagenes_planeta_recicla/post_0.jpg?itok=nnj899y7";
  imagen:string="https://www.ecoembes.com/sites/default/files/styles/500___auto/public/imagenes_planeta_recicla/post_0.jpg?itok=nnj899y7";
  imagen2:string="https://www.dzoom.org.es/wp-content/uploads/2017/07/seebensee-2384369-810x540.jpg";
  link:string="https://www.google.com";
  changeTxt:string="<b>botoncito</b>";
  cambiado:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  cambiarImagen():void{
    if(!this.cambiado){
      this.urlImagen=this.imagen2;
      this.cambiado=true;
      this.changeTxt="boton";
    }else{
      this.urlImagen=this.imagen;
      this.cambiado=false;
      this.changeTxt="otro nombre";
    }
  }

}

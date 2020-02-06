import { Component, OnInit, Input } from '@angular/core';
import { Curso } from '../../models';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ver-curso',
  templateUrl: './ver-curso.component.html',
  styleUrls: ['./ver-curso.component.css']
})
export class VerCursoComponent implements OnInit {
  data:any;
  constructor(private route: ActivatedRoute, private router: Router) { 
    this.route.queryParams.subscribe(params => {
      console.log("datos recibidos: ",params);
      if (this.router.getCurrentNavigation().extras.state) {
        // this.data = this.router.getCurrentNavigation().extras.state.user;
        console.log("datos recibido extras: ",this.router.getCurrentNavigation().extras.state);
      }
    });
  }

  ngOnInit() {
  }

}

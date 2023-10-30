import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClaseService } from 'src/app/service/clase.service';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  clases: any[] = [];


  constructor(
    private userService: UserService,
    private router: Router,
    private claseService: ClaseService
  ) { }
  ngOnInit() {
    this.claseService.getClases().subscribe((clases) => {
      this.clases = clases;
    });
  }


  //Función para deslogearse a través de un botón
  onClick() {
    this.userService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
  }



}

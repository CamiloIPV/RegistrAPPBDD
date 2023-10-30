import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ClaseService } from 'src/app/service/clase.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent{

  formulario: FormGroup;


  constructor(private clasesService: ClaseService, private userService: UserService, private router: Router){
    this.formulario = new FormGroup({
      name: new FormControl(),
      seccion: new FormControl(),
      horario: new FormControl(),
    })
  }

  

    //Función para deslogearse a través de un botón
    onClick() {
      this.userService.logout()
        .then(() => {
          this.router.navigate(['/login']);
        })
        .catch(error => console.log(error));
    }

  async onSubmit(){
    console.log(this.formulario.value)
    const response = await this.clasesService.addClase(this.formulario.value);
    console.log(response);
  }
}

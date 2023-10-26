import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  //Se llama el servicio a través del constructor
  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  //Función para subir los datos ingresados a FireBase
  onSubmit() {
    // Obtenemos el correo electrónico del formulario
    const email = this.formLogin.value.email;
   
    // Verificamos el tipo de correo electrónico
    if (email.endsWith('@profesor.cl')) {
       // Realizamos la operación de inicio de sesión
       this.userService.login(this.formLogin.value)
         .then(response => {
           console.log(response);
           this.router.navigate(['/profesor']);
         })
         .catch(error => console.log(error));
    } else if (email.endsWith('@alumno.cl')) {
       // Redirigimos a otra página dependiendo del tipo de correo electrónico
       this.router.navigate(['/alumno']);
    } else {
       // Podemos mostrar un mensaje de error si no se cumple ninguna de las condiciones anteriores
       console.log('Error: Tipo de correo electrónico no válido');
    }
  }
}
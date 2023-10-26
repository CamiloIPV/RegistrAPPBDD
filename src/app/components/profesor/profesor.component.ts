import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClaseService } from 'src/app/service/clase.service';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements OnInit {

  formulario: FormGroup;


  constructor(private clasesService: ClaseService){
    this.formulario = new FormGroup({
      name: new FormControl(),
      seccion: new FormControl(),
      horario: new FormControl(),
    })
  }

  ngOnInit(): void{

  }

  async onSubmit(){
    console.log(this.formulario.value)
    const response = await this.clasesService.addClase(this.formulario.value);
    console.log(response);
  }
}

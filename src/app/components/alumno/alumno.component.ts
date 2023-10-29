import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { collection, getDocs } from 'firebase/firestore';
import { ClaseService } from 'src/app/service/clase.service';
import { UserService } from 'src/app/service/user.service';
import { getFirestore } from 'firebase/firestore';

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
    private claseService: ClaseService,
    private firestore: Firestore
  ) { }

  async ngOnInit() {
    const claseCollectionRef = collection(this.firestore, 'clases');
    try{
      const querySnapshot = await getDocs(claseCollectionRef);

    querySnapshot.forEach((doc)=>{
      if (doc.exists()){
        const datos = doc.data();
        console.log('Datos del documento:', datos);
      }
    }); 
    }catch(error){
      console.log('Error al obtener documentos de la colección:', error)
    }
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

import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: Auth, private firestore: Firestore) { }




  //Servicio creado para registrar un usuario mediante FireBase
  register({email, password}: any){
    return createUserWithEmailAndPassword(this.auth, email, password);
  }
  //Servicio creado para Logearse con el usuario creado mediante FireBase
  login({email, password}: any){
    return signInWithEmailAndPassword(this.auth, email, password);
  }
  //Servicio creado para hacer logout desde la página main
  logout() {
    return signOut(this.auth);
  }

}

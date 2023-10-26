import { Injectable } from '@angular/core';
import Clase from '../interfaces/clase.interface';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClaseService {
  getClase() {
    throw new Error('Method not implemented.');
  }

  constructor(private firestore: Firestore) { }

  addClase(clase: Clase){
    const claseRef= collection(this.firestore, 'clases');
    return addDoc(claseRef, clase)
  }

}


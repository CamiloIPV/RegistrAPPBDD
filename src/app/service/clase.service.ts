import { Injectable } from '@angular/core';
import Clase from '../interfaces/clase.interface';
import { Firestore, addDoc, collection, getDoc, doc} from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClaseService {
  collection: any;



  constructor(private firestore: Firestore) { }

  addClase(clase: Clase){
    const claseRef= collection(this.firestore, 'clases');
    return addDoc(claseRef, clase)
  }

  getClase(claseId: string){
    const claseRef = doc(this.firestore, 'clases', claseId);
    return getDoc(claseRef)
  }


} 



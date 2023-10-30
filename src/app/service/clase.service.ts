import { Injectable } from '@angular/core';
import Clase from '../interfaces/clase.interface';
import { Firestore, addDoc, collection, getDoc, doc, query, getDocs} from '@angular/fire/firestore';
import { Observable, from, map } from 'rxjs';
import { QuerySnapshot } from 'firebase/firestore';


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

  getClases(): Observable<any[]> {
    const clasesCollection = collection(this.firestore, 'clases');
    const q = query(clasesCollection);
    return from(getDocs(q)).pipe(
      map((querySnapshot) => {
        const clases: any[] = [];
        querySnapshot.forEach((doc) => {
          clases.push({ id: doc.id, ...doc.data() });
        });
        return clases;
      })
    );
  }

} 



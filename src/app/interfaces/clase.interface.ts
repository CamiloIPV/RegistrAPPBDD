import { Timestamp } from "firebase/firestore";

export default interface Clase {
    uid?:string;
    name:string;
    seccion:string;
    horario:Timestamp;
}

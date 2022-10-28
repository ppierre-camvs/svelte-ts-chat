import { db } from './firebase.service';
import { collection, doc, setDoc, type DocumentData } from "firebase/firestore";
import { collectionData, docData } from 'rxfire/firestore';
import type { Observable } from 'rxjs';
import type { Message } from 'src/models/message';


export class MessageService {

    cpt = 1;

    public getAllMessages(): Observable<DocumentData[]> {
        const messRef = collection(db, 'message')
        return collectionData(messRef)
    }

    public addMessage(msg: Message) {
        const messRef = doc(db, 'message', (Math.random()*10000).toString());
         setDoc(messRef, { pseudo: msg.pseudo, time: msg.time, contenu: msg.contenu + (this.cpt++).toString()});
    }
}

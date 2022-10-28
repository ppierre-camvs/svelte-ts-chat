import { db } from './firebase.service';
import { collection, doc, setDoc, type DocumentData } from "firebase/firestore";
import { collectionData } from 'rxfire/firestore';
import type { Observable } from 'rxjs';
import type { Message } from 'src/models/message';


export class MessageService {

    public getAllMessages(): Observable<DocumentData[]> {
        const messRef = collection(db, 'message')
        return collectionData(messRef)
    }

    public addMessage(msg: Message) {
        const messRef = collection(db, 'message')
        messRef.
    }
}

export class Message{
    id: string;
    pseudo: string;
    contenu: string;
    time: string;

    constructor(id: string, pseudo: string, time: string, contenu: string) {
        this.id = id;
        this.pseudo = pseudo;
        this.time = time;
        this.contenu = contenu;
    }

}
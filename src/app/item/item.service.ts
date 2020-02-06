import { Injectable } from "@angular/core";
import { Item, Type } from "./item";

@Injectable({
    providedIn: "root"
})
export class ItemService {
    private items = new Array<Item>(
        { id: 1, name: "Ter Stegen", role: "Goalkeeper", type: Type.soccer },
        { id: 2, name: "Piqué", role: "Defender", type: Type.soccer },
        { id: 3, name: "I. Rakitic", role: "Midfielder", type: Type.soccer },
        { id: 4, name: "Sergio", role: "Midfielder", type: Type.soccer },
        { id: 5, name: "Denis Suárez", role: "Midfielder", type: Type.soccer },
        { id: 6, name: "Arda", role: "Midfielder", type: Type.soccer },
        { id: 7, name: "A. Iniesta", role: "Midfielder", type: Type.soccer },
        { id: 8, name: "Suárez", role: "Forward", type: Type.soccer },
        { id: 9, name: "Messi", role: "Forward", type: Type.soccer },
        { id: 10, name: "Neymar", role: "Forward", type: Type.soccer },
        { id: 11, name: "Rafinha", role: "Midfielder", type: Type.artist },
        { id: 12, name: "Cillessen", role: "Goalkeeper", type: Type.artist },
        { id: 13, name: "Mascherano", role: "Defender", type: Type.artist },
        { id: 14, name: "Paco Alcácer", role: "Forward", type: Type.artist },
        { id: 15, name: "Jordi Alba", role: "Defender", type: Type.artist },
        { id: 16, name: "Digne", role: "Defender", type: Type.artist },
        { id: 17, name: "Sergi Roberto", role: "Midfielder", type: Type.artist },
        { id: 18, name: "André Gomes", role: "Midfielder", type: Type.artist },
        { id: 19, name: "Aleix Vidal", role: "Midfielder", type: Type.artist },
        { id: 20, name: "Umtiti", role: "Defender", type: Type.artist },
        { id: 21, name: "Mathieu", role: "Defender", type: Type.artist },
        { id: 22, name: "Masip", role: "Goalkeeper", type: Type.artist }
    );

    getItems(): Array<Item> {
        return this.items;
    }
    getItem(id: number): Item {
        return this.items.filter((item) => item.id === id)[0];
    }
    getArtist(): Array<Item> {
        return this.items.filter((ele) => ele.type == Type.artist)
    }
    getSoccer(): Array<Item> {
        return this.items.filter((ele) => ele.type == Type.soccer)
    }
    updateData(id: any) {
        return this.items.find(id)
    }
    addItem(data: any) {
        this.items.push(data)
    }
    getLength(): number {
        return this.items.length
    }

}

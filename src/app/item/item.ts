export interface Item {
    id: number;
    name: string;
    role: string;
    type: Type;
}
export enum Type{
    artist = "artist",
    soccer = "soccer",
}
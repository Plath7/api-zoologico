import {Animal} from "./Animal";

export class Mamifero extends Animal{
    private raca: string;

    constructor(_raca: string,
                _nome: string,
                _idade: number,
                _genero: string) {
        super(_nome, _idade, _genero);
        this.raca = _raca;
    }
    public getRaca(): string {
        return this.raca;
    }

    // Método set para o atributo nome
    public setRaca(raca: string) {
        this.raca = raca;
    }
}
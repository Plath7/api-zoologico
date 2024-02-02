import { Animal } from "./Animal";

export class Habitat {
    private nome: string;
    private listaDeAnimais: Animal;

    constructor(_nome: string, _listaDeAnimais: Animal) {
        this.nome = _nome;
        this.listaDeAnimais = _listaDeAnimais;
    }
    public getNome(): string {
        return this.nome;
    }

    // Método set para o atributo nome
    public setNome(nome: string) {
        this.nome = nome;
    }
    public getListaDeAnimais(): Animal {
        return this.listaDeAnimais;
    }

    // Método set para o atributo nome
    public setListaDeAnimais(listaDeAnimais: Animal) {
        this.listaDeAnimais = listaDeAnimais;
    }
}
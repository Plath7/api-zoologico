import { Animal } from "./Animal";

export class Habitat {
    private nome: string;
    private listaDeAnimais: Animal;

    constructor(_nome: string, _listaDeAnimais: Animal) {
        this.nome = _nome;
        this.listaDeAnimais = _listaDeAnimais;
    }
    // Método para obter o nome
    public getNome(): string {
        return this.nome;
    }

    // Método para definir o nome
    public setNome(nome: string) {
        this.nome = nome;
    }

    // Método para obter a lista de animais
    public getListaDeAnimais(): Animal {
        return this.listaDeAnimais;
    }

    // Método para definir a lista de animais
    public setListaDeAnimais(listaDeAnimais: Animal) {
        this.listaDeAnimais = listaDeAnimais;
    }
}
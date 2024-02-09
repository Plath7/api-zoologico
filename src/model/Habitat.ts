import { Animal } from './Animal';

export class Habitat {
    private nome: string;  // * Atributo privado para armazenar o nome do habitat
    private listaDeAnimais: Animal; // * Atributo privado para armazenar a lista de animai


    /**
     * Construtor da classe Habitat.
     * 
     * @param _nome O nome do habitat.
     * @param _listaDeAnimais A lista de animais no habitat.
     */
    constructor(_nome: string, _listaDeAnimais: Animal) {
        this.nome = _nome;
        this.listaDeAnimais = _listaDeAnimais;
    }

    /**
     * Método para obter o nome do habitat.
     * 
     * @returns O nome do habitat.
     */
    public getNome(): string {
        return this.nome;
    }

    /**
     * Método para definir o nome do habitat.
     * 
     * @param nome O nome a ser definido para o habitat.
     */
    public setNome(nome: string): void {
        this.nome = nome;
    }

    /**
     * Método para obter a lista de animais no habitat.
     * 
     * @returns A lista de animais no habitat.
     */
    public getListaDeAnimais(): Animal {
        return this.listaDeAnimais;
    }

    /**
     * Método para definir a lista de animais no habitat.
     * 
     * @param listaDeAnimais A lista de animais a ser definida para o habitat.
     */
    public setListaDeAnimais(listaDeAnimais: Animal): void {
        this.listaDeAnimais = listaDeAnimais;
    }
}

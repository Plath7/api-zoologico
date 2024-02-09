import { Habitat } from './Habitat';

export class Atracao {
    private nome: string;  // * Atributo privado para armazenar o nome da atração
    private listaHabitats: Habitat; // * Atributo privado para armazenar a lista de habitats da atração

    /**
     * Construtor da classe Atracao.
     * 
     * @param _nome O nome da atração.
     * @param _listaHabitats A lista de habitats na atração.
     */
    constructor(_nome: string, _listaHabitats: Habitat) {
        this.nome = _nome;
        this.listaHabitats = _listaHabitats;
    }

    /**
     * Método para obter o nome da atração.
     * 
     * @returns O nome da atração.
     */
    public getNome(): string {
        return this.nome;
    }

    /**
     * Método para definir o nome da atração.
     * 
     * @param nome O nome a ser definido para a atração.
     */
    public setNome(nome: string): void {
        this.nome = nome;
    }

    /**
     * Método para obter a lista de habitats na atração.
     * 
     * @returns A lista de habitats na atração.
     */
    public getListaHabitats(): Habitat {
        return this.listaHabitats;
    }

    /**
     * Método para definir a lista de habitats na atração.
     * 
     * @param listaHabitats A lista de habitats a ser definida para a atração.
     */
    public setListaHabitats(listaHabitats: Habitat): void {
        this.listaHabitats = listaHabitats;
    }
}

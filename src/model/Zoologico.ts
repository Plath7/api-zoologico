import { Atracao } from './Atracao';

export class Zoologico {
    private nome: string;  // * Atributo privado para armazenar o nome do zoológico
    private listaAtracoes: Atracao; // * Atributo privado para armazenar a lista de atrações do zoológico


    /**
     * Construtor da classe Zoologico.
     * 
     * @param _nome O nome do zoológico.
     * @param _listaAtracoes A lista de atrações do zoológico.
     */
    constructor(_nome: string, _listaAtracoes: Atracao) {
        this.nome = _nome;
        this.listaAtracoes = _listaAtracoes;
    }

    /**
     * Método para obter o nome do zoológico.
     * 
     * @returns O nome do zoológico.
     */
    public getNome(): string {
        return this.nome;
    }

    /**
     * Método para definir o nome do zoológico.
     * 
     * @param nome O nome a ser definido para o zoológico.
     */
    public setNome(nome: string): void {
        this.nome = nome;
    }

    /**
     * Método para obter a lista de atrações do zoológico.
     * 
     * @returns A lista de atrações do zoológico.
     */
    public getListaAtracoes(): Atracao {
        return this.listaAtracoes;
    }

    /**
     * Método para definir a lista de atrações do zoológico.
     * 
     * @param listaAtracoes A lista de atrações a ser definida para o zoológico.
     */
    public setListaAtracoes(listaAtracoes: Atracao): void {
        this.listaAtracoes = listaAtracoes;
    }
}

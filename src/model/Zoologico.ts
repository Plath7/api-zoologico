import { Atracao } from "./Atracao";
import {  } from "./Habitat";

export class Zoologico{
    private nome: string;
    private listaAtracoes: Atracao;

    constructor(_nome: string, _listaAtracoes: Atracao){
        this.nome = _nome;
        this.listaAtracoes = _listaAtracoes;
    }
     // Método para obter o nome
     public getNome(): string {
        return this.nome;
    }

    // Método para definir o nome
    public setNome(nome: string): void {
        this.nome = nome;
    }

    // Método para obter a lista de atrações
    public getListaAtracoes(): Atracao {
        return this.listaAtracoes;
    }

    // Método para definir a lista de atrações
    public setListaAtracoes(listaAtracoes: Atracao): void {
        this.listaAtracoes = listaAtracoes;
    }
}
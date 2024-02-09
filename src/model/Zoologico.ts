// Importação da classe Atracao que é usada como tipo para o atributo listaAtracoes
import { Atracao } from './Atracao';

// Definição da classe Zoologico
export class Zoologico {
    // Declaração dos atributos privados nome e listaAtracoes
    private nome: string;
    private listaAtracoes: Atracao;

    // Método construtor da classe Zoologico
    constructor(_nome: string, _listaAtracoes: Atracao) {
        // Inicialização dos atributos nome e listaAtracoes com os valores passados como parâmetros
        this.nome = _nome;
        this.listaAtracoes = _listaAtracoes;
    }

    // Método para obter o nome do zoológico
    public getNome(): string {
        return this.nome; // Retorna o valor do atributo nome
    }

    // Método para definir o nome do zoológico
    public setNome(nome: string): void {
        this.nome = nome; // Define o valor do atributo nome
    }

    // Método para obter a lista de atrações do zoológico
    public getListaAtracoes(): Atracao {
        return this.listaAtracoes; // Retorna o valor do atributo listaAtracoes
    }

    // Método para definir a lista de atrações do zoológico
    public setListaAtracoes(listaAtracoes: Atracao): void {
        this.listaAtracoes = listaAtracoes; // Define o valor do atributo listaAtracoes
    }
}
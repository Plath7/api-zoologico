// Importação da classe Animal que é usada como tipo para o atributo listaDeAnimais
import { Animal } from './Animal';

// Definição da classe Habitat
export class Habitat {
    // Declaração dos atributos privados nome e listaDeAnimais
    private nome: string;
    private listaDeAnimais: Animal;

    // Método construtor da classe Habitat
    constructor(
        _nome: string,              // Parâmetro representando o nome do habitat
        _listaDeAnimais: Animal    // Parâmetro representando a lista de animais no habitat
    ) {
        // Inicialização dos atributos nome e listaDeAnimais com os valores passados como parâmetros
        this.nome = _nome;
        this.listaDeAnimais = _listaDeAnimais;
    }

    // Método para obter o nome do habitat
    public getNome(): string {
        return this.nome; // Retorna o valor do atributo nome
    }

    // Método para definir o nome do habitat
    public setNome(nome: string): void {
        this.nome = nome; // Define o valor do atributo nome
    }

    // Método para obter a lista de animais no habitat
    public getListaDeAnimais(): Animal {
        return this.listaDeAnimais; // Retorna o valor do atributo listaDeAnimais
    }

    // Método para definir a lista de animais no habitat
    public setListaDeAnimais(listaDeAnimais: Animal): void {
        this.listaDeAnimais = listaDeAnimais; // Define o valor do atributo listaDeAnimais
    }
}

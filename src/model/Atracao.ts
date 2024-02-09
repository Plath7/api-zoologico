// Importação da classe Habitat que é usada como tipo para o atributo listaHabitats
import { Habitat } from './Habitat';

// Definição da classe Atracao
export class Atracao {
    // Declaração dos atributos privados nome e listaHabitats
    private nome: string;
    private listaHabitats: Habitat;

    // Método construtor da classe Atracao
    constructor(
        _nome: string,               // Parâmetro representando o nome da atração
        _listaHabitats: Habitat    // Parâmetro representando a lista de habitats na atração
    ) {
        // Inicialização dos atributos nome e listaHabitats com os valores passados como parâmetros
        this.nome = _nome;
        this.listaHabitats = _listaHabitats;
    }

    // Método para obter o nome da atração
    public getNome(): string {
        return this.nome; // Retorna o valor do atributo nome
    }

    // Método para definir o nome da atração
    public setNome(nome: string): void {
        this.nome = nome; // Define o valor do atributo nome
    }

    // Método para obter a lista de habitats na atração
    public getListaHabitats(): Habitat {
        return this.listaHabitats; // Retorna o valor do atributo listaHabitats
    }

    // Método para definir a lista de habitats na atração
    public setListaHabitats(listaHabitats: Habitat): void {
        this.listaHabitats = listaHabitats; // Define o valor do atributo listaHabitats
    }
}

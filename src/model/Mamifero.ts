// Importação da classe Animal que é estendida pela classe Mamifero
import { Animal } from './Animal';

// Definição da classe Mamifero
export class Mamifero extends Animal {
    // Declaração do atributo privado raca do tipo string
    private raca: string;

    // Método construtor da classe Mamifero
    constructor(
        _raca: string,       // Parâmetro representando a raça do mamífero
        _nome: string,      // Parâmetro representando o nome do mamífero
        _idade: number,     // Parâmetro representando a idade do mamífero
        _genero: string     // Parâmetro representando o gênero do mamífero
    ) {
        // Chamada ao construtor da classe pai (Animal) com os parâmetros correspondentes
        super(_nome, _idade, _genero);
        // Atribuição do valor do parâmetro _raca ao atributo raca
        this.raca = _raca;
    }

    // Método para obter a raça do mamífero
    public getRaca(): string {
        return this.raca; // Retorna o valor do atributo raca
    }

    // Método para definir a raça do mamífero
    public setRaca(raca: string): void {
        this.raca = raca; // Define o valor do atributo raca
    }

    // Os métodos getNome e setNome são herdados da classe Animal, então não precisam ser redefinidos aqui
}

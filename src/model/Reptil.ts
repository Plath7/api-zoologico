// Importação da classe Animal que é estendida pela classe Reptil
import { Animal } from './Animal';

// Definição da classe Reptil que herda da classe Animal
export class Reptil extends Animal {
    // Declaração do atributo privado tipo_de_escamas do tipo string
    private tipo_de_escamas: string;

    // Método construtor da classe Reptil
    constructor(
        _nome: string,      // Parâmetro representando o nome do reptil
        _idade: number,     // Parâmetro representando a idade do reptil
        _genero: string,    // Parâmetro representando o gênero do reptil
        _tipo_de_escamas: string,  // Parâmetro representando o tipo de escamas do reptil
    ) {
        // Chamada ao construtor da classe pai (Animal) com os parâmetros correspondentes
        super(_nome, _idade, _genero);
        // Atribuição do valor do parâmetro _tipo_de_escamas ao atributo tipo_de_escamas
        this.tipo_de_escamas = _tipo_de_escamas;
    }

    // Método para obter o tipo de escamas do reptil
    public getTipoDeEscamas(): string {
        return this.tipo_de_escamas;  // Retorna o valor do atributo tipo_de_escamas
    }

    // Método para definir o tipo de escamas do reptil
    public setTipoDeEscamas(tipo_de_escamas: string): void {
        this.tipo_de_escamas = tipo_de_escamas;  // Define o valor do atributo tipo_de_escamas
    }

    // Os métodos getNome e setNome são herdados da classe Animal, então não precisam ser redefinidos aqui
}

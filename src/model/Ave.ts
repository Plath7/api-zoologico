// Importação da classe Animal que é estendida pela classe Ave
import { Animal } from './Animal';

// Definição da classe Ave
export class Ave extends Animal {
    // Declaração do atributo privado envergadura do tipo number
    private envergadura: number;

    // Método construtor da classe Ave
    constructor(
        _nome: string,       // Parâmetro representando o nome da ave
        _idade: number,      // Parâmetro representando a idade da ave
        _genero: string,     // Parâmetro representando o gênero da ave
        _envergadura: number // Parâmetro representando a envergadura da ave
    ) {
        // Chamada ao construtor da classe pai (Animal) com os parâmetros correspondentes
        super(_nome, _idade, _genero);
        // Atribuição do valor do parâmetro _envergadura ao atributo envergadura
        this.envergadura = _envergadura;
    }

    // Método para obter a envergadura da ave
    public getEnvergadura(): number {
        return this.envergadura; // Retorna o valor do atributo envergadura
    }

    // Método para definir a envergadura da ave
    public setEnvergadura(envergadura: number): void {
        this.envergadura = envergadura; // Define o valor do atributo envergadura
    }

    // Os métodos getNome e setNome são herdados da classe Animal, então não precisam ser redefinidos aqui
}

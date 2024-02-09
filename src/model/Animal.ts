export class Animal {
    private nome: string;
    private idade: number;
    private genero: string;

    constructor(_nome: string,
        _idade: number,
        _genero: string) {

        this.nome = _nome;
        this.idade = _idade;
        this.genero = _genero;

    }
   // Método para obter o nome
public getNome(): string {
    return this.nome; // Retorna o valor do atributo nome
}

// Método set para o atributo nome
public setNome(nome: string) {
    this.nome = nome; // Define o valor do atributo nome
}

// Método para obter a idade
public getIdade(): number {
    return this.idade; // Retorna o valor do atributo idade
}

// Método set para o atributo idade
public setIdade(idade: number) {
    this.idade = idade; // Define o valor do atributo idade
}

// Método para obter o gênero
public getGenero(): string {
    return this.genero; // Retorna o valor do atributo genero
}

// Método set para o atributo genero
public setGenero(genero: string) {
    this.genero = genero; // Define o valor do atributo genero
}

}



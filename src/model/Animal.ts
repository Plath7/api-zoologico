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
    public getNome(): string {
        return this.nome;
    }

    // Método set para o atributo nome
    public setNome(nome: string) {
        this.nome = nome;
    }

    // Método get para o atributo idade
    public getIdade(): number {
        return this.idade;
    }

    // Método set para o atributo idade
    public setIdade(idade: number) {
        this.idade = idade;
    }

    // Método get para o atributo genero
    public getGenero(): string {
        return this.genero;
    }

    // Método set para o atributo genero
    public setGenero(genero: string) {
        this.genero = genero;
    }
}



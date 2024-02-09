
export class Animal {
    private nome: string;  // * Atributo privado para armazenar o nome do animal
    private idade: number; // * Atributo privado para armazenar a idade do animal
    private genero: string; // * Atributo privado para armazenar o gênero do animal


    /**
     * Construtor da classe Animal.
     * 
     * @param _nome O nome do animal.
     * @param _idade A idade do animal.
     * @param _genero O gênero do animal.
     */
    constructor(
        _nome: string,
        _idade: number,
        _genero: string
    ) {
        this.nome = _nome;
        this.idade = _idade;
        this.genero = _genero;
    }

    /**
     * Método para obter o nome do animal.
     * 
     * @returns O nome do animal.
     */
    public getNome(): string {
        return this.nome; // Retorna o valor do atributo nome
    }

    /**
     * Método para definir o nome do animal.
     * 
     * @param nome O nome a ser definido para o animal.
     */
    public setNome(nome: string): void {
        this.nome = nome; // Define o valor do atributo nome
    }

    /**
     * Método para obter a idade do animal.
     * 
     * @returns A idade do animal.
     */
    public getIdade(): number {
        return this.idade; // Retorna o valor do atributo idade
    }

    /**
     * Método para definir a idade do animal.
     * 
     * @param idade A idade a ser definida para o animal.
     */
    public setIdade(idade: number): void {
        this.idade = idade; // Define o valor do atributo idade
    }

    /**
     * Método para obter o gênero do animal.
     * 
     * @returns O gênero do animal.
     */
    public getGenero(): string {
        return this.genero; // Retorna o valor do atributo genero
    }

    /**
     * Método para definir o gênero do animal.
     * 
     * @param genero O gênero a ser definido para o animal.
     */
    public setGenero(genero: string): void {
        this.genero = genero; // Define o valor do atributo genero
    }
}




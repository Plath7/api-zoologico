import { Animal } from './Animal';

export class Mamifero extends Animal {
    private raca: string; // * Atributo privado para armazenar a raça do mamífero


    /**
     * Construtor da classe Mamifero.
     * 
     * @param _raca A raça do mamífero.
     * @param _nome O nome do mamífero.
     * @param _idade A idade do mamífero.
     * @param _genero O gênero do mamífero.
     */
    constructor(
        _raca: string,
        _nome: string,
        _idade: number,
        _genero: string
    ) {
        super(_nome, _idade, _genero);
        this.raca = _raca;
    }

    /**
     * Método para obter a raça do mamífero.
     * 
     * @returns A raça do mamífero.
     */
    public getRaca(): string {
        return this.raca;
    }

    /**
     * Método para definir a raça do mamífero.
     * 
     * @param raca A raça a ser definida para o mamífero.
     */
    public setRaca(raca: string): void {
        this.raca = raca;
    }
}

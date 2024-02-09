import { Animal } from './Animal';

export class Reptil extends Animal {
    private tipo_de_escamas: string; // * Atributo privado para armazenar o tipo de escamas do réptil


    /**
     * Construtor da classe Reptil.
     * 
     * @param _nome O nome do réptil.
     * @param _idade A idade do réptil.
     * @param _genero O gênero do réptil.
     * @param _tipo_de_escamas O tipo de escamas do réptil.
     */
    constructor(
        _nome: string,
        _idade: number,
        _genero: string,
        _tipo_de_escamas: string
    ) {
        super(_nome, _idade, _genero);
        this.tipo_de_escamas = _tipo_de_escamas;
    }

    /**
     * Método para obter o tipo de escamas do réptil.
     * 
     * @returns O tipo de escamas do réptil.
     */
    public getTipoDeEscamas(): string {
        return this.tipo_de_escamas;
    }

    /**
     * Método para definir o tipo de escamas do réptil.
     * 
     * @param tipo_de_escamas O tipo de escamas a ser definido para o réptil.
     */
    public setTipoDeEscamas(tipo_de_escamas: string): void {
        this.tipo_de_escamas = tipo_de_escamas;
    }
}

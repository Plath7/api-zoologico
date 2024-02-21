import { Animal } from './Animal';
import { DatabaseModel } from './DatabaseModel';

const database = new DatabaseModel().pool;

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

    static async listarMamiferos(): Promise<Mamifero[]> {
        try {
            const database = new DatabaseModel().pool;
            const query = `SELECT * FROM mamifero`;
            const result = await database.query(query);
            return result.rows;
        } catch (error) {
            console.error('Erro ao listar mamíferos:', error);
            throw error;
        }
    }

    static async cadastrarMamifero(mamifero: Mamifero): Promise<boolean> {
        try {
            let insertResult = false;
            await database.query(`INSERT INTO mamifero (raca, nome, idade, genero)
                VALUES
                ('${mamifero.getRaca().toUpperCase()}', '${mamifero.getNome().toUpperCase()}', ${mamifero.getIdade()}, '${mamifero.getGenero().toUpperCase()}');
            `).then((result) => {
                if(result.rowCount != 0) {
                    insertResult = true;
                }
            });
            return true;
        } catch (error) {
            console.error('Erro ao cadastrar mamífero:', error);
            return false;
        }
    }


}


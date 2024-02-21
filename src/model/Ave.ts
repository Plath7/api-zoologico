import { Animal } from './Animal';
import { DatabaseModel } from './DatabaseModel';

export class Ave extends Animal {
    private envergadura: number; // * Atributo privado para armazenar a envergadura da ave


    /**
     * Construtor da classe Ave.
     * 
     * @param _nome O nome da ave.
     * @param _idade A idade da ave.
     * @param _genero O gênero da ave.
     * @param _envergadura A envergadura da ave.
     */
    constructor(
        _nome: string,
        _idade: number,
        _genero: string,
        _envergadura: number
    ) {
        super(_nome, _idade, _genero);
        this.envergadura = _envergadura;
    }

    /**
     * Método para obter a envergadura da ave.
     * 
     * @returns A envergadura da ave.
     */
    public getEnvergadura(): number {
        return this.envergadura;
    }

    /**
     * Método para definir a envergadura da ave.
     * 
     * @param envergadura A envergadura a ser definida para a ave.
     */
    public setEnvergadura(envergadura: number): void {
        this.envergadura = envergadura;
    }


    static async listarAves(): Promise<Ave[]> {
        try {
            const database = new DatabaseModel().pool;
            const query = `SELECT * FROM ave`;
            const result = await database.query(query);
            return result.rows;
        } catch (error) {
            console.error('Erro ao listar aves:', error);
            throw error;
        }
    }


    static async cadastrarAve(ave: Ave): Promise<boolean> {
        try {
            const database = new DatabaseModel().pool;
            const query = `
                INSERT INTO ave (nome, idade, genero, envergadura)
                VALUES 
            `;
            const values = [ave.getNome(), ave.getIdade(), ave.getGenero(), ave.getEnvergadura()];
            await database.query(query, values);
            return true;
        } catch (error) {
            console.error('Erro ao cadastrar ave:', error);
            return false;
        }
    }

   
}


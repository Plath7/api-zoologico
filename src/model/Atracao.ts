import { Habitat } from "./Habitat";

export class Atracao{
    private nome: string;
    private listaHabitats: Habitat;

    constructor(_nome: string, _listaHabitats: Habitat){
        this.nome = _nome;
        this.listaHabitats = _listaHabitats;
    }
       // Método para obter o nome
       public getNome(): string {
        return this.nome;
    }

    // Método para definir o nome
    public setNome(nome: string): void {
        this.nome = nome;
    }

    // Método para obter a lista de habitats
    public getListaHabitats(): Habitat {
        return this.listaHabitats;
    }

    // Método para definir a lista de habitats
    public setListaHabitats(listaHabitats: Habitat): void {
        this.listaHabitats = listaHabitats;
    }
}
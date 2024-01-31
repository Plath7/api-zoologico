class Ave extends Animal {
    private envergadura: number;

    constructor(_envergadura: number,
        _nome: string,
        _idade: number,
        _genero: string) {
        super(_nome, _idade, _genero);
        this.envergadura = _envergadura
    }
     public getEnvergadura(): number {
        return this.envergadura;
    }

    // Método set para o atributo nome
    public setEnvergadura(envergadura: number) {
        this.envergadura = envergadura;
    }
}
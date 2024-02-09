import express from "express";
import cors from "cors"
import { Ave } from "./model/Ave";
import { Mamifero } from "./model/Mamifero"
import { Reptil } from "./model/Reptil"
import { Habitat } from "./model/Habitat";
import { Atracao } from "./model/Atracao";
import { Zoologico } from "./model/Zoologico";



const port = 3001;

const server = express();

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    let ave: Ave = new Ave('Papagaio', 30, 'Masculino', 10);
    let reptil: Reptil = new Reptil('Lagarto', 2, 'Femea', 'Cicloides');
    let mamifero: Mamifero = new Mamifero('Doberman', 'Cachorro', 102, 'Femea')
    let habitat: Habitat = new Habitat( 'Selva', ave)
    res.json([ave, reptil, mamifero, habitat])
});

server.listen(port, () => {
    console.log(`servidor está escutando no endereço http://localhost:${port}`);
});

server.post ('/ave', (req, res) => {
    const { nome, idade, genero, envergadura } = req.body;
    const novaAve = new Ave(nome, idade, genero, envergadura);
    res.json(['Está é a nova ave do Zoológico', novaAve]);
})

server.post('/habitat', (req, res) => {
    const {nome, animais} = req.body;
    const habitat = new Habitat(nome, animais);
    console.log(habitat);
    res.status(200).json("Habitat criado");
})

server.post('/atracao', (req, res) => {
    const {nome, animais} = req.body;
    const atracao = new Atracao(nome, animais);
    console.log(atracao);
    res.status(200).json("Atração criada");
})

server.post('/zoologico', (req, res) => {
    const {nome, animais} = req.body;
    const zoo = new Zoologico(nome, animais);
    console.log(zoo);
    res.status(200).json("Zoológico criado");
})
import express from "express";
import cors from "cors"

const port = 3001;

const server = express();

server.use(express.json());
server.use(cors());

server.get('/', (req, res) =>
    res.json('Olá mundo!!')
);

server.listen(port, () => {
    console.log(`servidor está escutando no endereço http://localhost:${port}`);
});
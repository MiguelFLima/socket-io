import express from 'express';
import url from 'url';
import path from 'path';
import http from 'http';
import { Server } from 'Socket.io';

const app = express();
const port = process.env.porta || 3000;

const caminhoAtual = url.fileURLToPath(import.meta.url);
const diretorioPublico = path.join(caminhoAtual, '../../', 'public');
app.use(express.static(diretorioPublico));

const servidorHttp = http.createServer(app);

servidorHttp.listen(port, () =>
  console.log(`Servidor rodando na porta ${3000}`)
);

const io = new Server(servidorHttp);

io.on('connection', () => console.log('Um cliente se conectou'));

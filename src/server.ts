import express from "express";
import './database'; // o javascript detecta que queremos o index
import {routes} from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

/**
 * 
 * GET = Buscar informacao
 * POST = Criar
 * PUT = Alterar
 * DELETE = deletar
 * PATCH = Alterar uma informaçao especifica (somente uma informaçao: exemplo: senha de usuario)
 * 
 */

app.listen(3333, () => console.log("Server is running on port: 3333"));
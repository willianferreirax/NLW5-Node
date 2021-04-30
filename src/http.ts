import express from "express";
import { createServer } from "http"
import { Server, Socket} from "socket.io"
import path from "path"

import './database'; // o javascript detecta que queremos o index
import {routes} from "./routes";

const app = express();

app.use(express.static(path.join(__dirname,"..","public")))
app.set("views", path.join(__dirname,"..","public"))
app.engine("html", require("ejs").renderFile)
app.set("view engine", "html")

app.get("/pages/client", (request,response)=>{
    return response.render("html/client.html")
})

const http = createServer(app); //criando protocolo htt
const io = new Server(http)//criando protocolo ws

io.on("connection", (socket: Socket) => {
    console.log("se conectou", socket.id)
})

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

export {http, io}
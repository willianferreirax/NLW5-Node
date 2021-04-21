import express from "express";

const app = express();

/**
 * 
 * GET = Buscar informacao
 * POST = Criar
 * PUT = Alterar
 * DELETE = deletar
 * PATCH = Alterar uma informaçao especifica (somente uma informaçao: exemplo: senha de usuario)
 * 
 * 
 */

app.get('/', (req, res) =>{
    return res.send("olá NLW 05")
})

app.listen(3333, () => console.log("Server is running on port: 3333"));
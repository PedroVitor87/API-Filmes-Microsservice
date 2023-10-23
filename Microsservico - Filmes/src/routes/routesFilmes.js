const express = require('express');
const routes = express.Router();
const arrayFilmes = require('../database/filmes');

routes.get("/filmes", async (req, res) => { //Listar filmes
    try{
        res.status(200).json(arrayFilmes)
    } catch (error) {
        console.error("Erro durante a busca da lista de filmes:", error);
        res.status(500).json({ error: "Erro interno no servidor" });
    }
})

routes.get("/filmes/:id", async (req, res) => { //Buscar filme por ID
    try {
        const idFilme = Number(req.params.id);
        const filme = arrayFilmes.find((filme) => filme.id === idFilme);

        if (!filme) {
            return res.status(404).json({ error: "Filme não encontrado" });
        }

        res.json(filme);
    } catch (error) {
        console.error(`Erro durante a busca do filme por id`, error);
        res.status(500).json({ error: "Erro interno no servidor" });
    }
});

module.exports = routes;

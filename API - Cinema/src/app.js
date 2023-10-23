const express = require('express')
const app = express()
const PORT = 4444

app.get("/api/filmes/:id", async (req, res) => { //Busca filme por id do microsservico
    const idFilme = req.params.id
    const bancoServiceURL = 'http://localhost:3333/filmes' //URL do microsserviço filme

    try{
        const response = await fetch(`${bancoServiceURL}/${idFilme}`) //Faz uma requisição ao microsserviço
        if(response.status === 200){
            const filme = await response.json()
            res.json(filme)
        }else if(response.status === 404){
            res.status(404).json({error: 'Filme não encotrado'})
        }else{
            res.status(500).json({error: "Erro ao buscar filme"})
        }
    }catch (error) {
        console.error(`Erro durante a busca do filme por id`, error);
        res.status(500).json({ error: "Erro interno no servidor" });
    }
})

app.listen(PORT, () => {
    console.log(`API rodando na porta ${PORT}`)
})
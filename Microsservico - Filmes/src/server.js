const express = require('express');
const app = express();
const routes = require('./routes/routesFilmes');

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(routes)

const PORT = 3333

app.listen(PORT, () => {
    console.log(`Microsserviço rodando na porta ${PORT}`);
})
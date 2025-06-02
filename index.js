const express = require('express');
const app = express();

app.use(express.json()); // Middleware para ler JSON no corpo da requisição
app.use(express.urlencoded({ extended: true })); // Middleware para ler dados de formulário (POST x-www-form-urlencoded)

// Rota para receber qualquer método (GET, POST, etc.)
app.all('/receber', (req, res) => {
    let response = '';

    // Exibir os parâmetros GET
    if (Object.keys(req.query).length > 0) {
        response += 'GET Parameters:\n';
        response += JSON.stringify(req.query, null, 2) + '\n';
    }

    // Verificar e processar o corpo JSON da requisição
    if (req.is('application/json') && Object.keys(req.body).length > 0) {
        response += 'JSON Body:\n';
        response += JSON.stringify(req.body, null, 2) + '\n';
    } else if (Object.keys(req.body).length > 0) {
        // Caso não seja um JSON, exibir os parâmetros POST (form-data ou x-www-form-urlencoded)
        response += 'POST Parameters:\n';
        response += JSON.stringify(req.body, null, 2) + '\n';
    }

    res.type('text/plain').send(response || 'No parameters received.');
});

// Iniciar servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});

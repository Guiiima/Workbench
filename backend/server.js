const express = require('express');
const cors = require('cors');
const simpleGit = require('simple-git');

const app = express();
const port = 3000; // Porta onde o backend vai rodar
app.use(cors());
app.use(express.json());
app.get('/api/status', (req, res) => {
  res.json({ message: 'Olá! O backend está no ar!' });
});
app.post('/api/repos', async (req, res) => {
    const { repoUrl, localPath } = req.body; 
    if (!repoUrl || !localPath) {
        return res.status(400).json({ error: 'URL do repositório e caminho local são obrigatórios.' });
    }
    console.log(`Processando o repositório: ${repoUrl}`);
    res.json({ message: `Repositório ${repoUrl} processado com sucesso!` });
});
app.listen(port, () => {
  console.log(`Backend rodando em http://localhost:${port}`);
});
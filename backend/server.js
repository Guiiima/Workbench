const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/status', (req, res) => {
  res.json({ message: 'Backend está no ar!' });
});

app.get('/api/github/repos', async (req, res) => {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return res.status(500).json({ message: 'Token do GitHub não encontrado no servidor.' });
  }

  try {
    const response = await axios.get('https://api.github.com/user/repos', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/vnd.github.v3+json'
      },
      params: {
        sort: 'updated',
        per_page: 50
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error('Erro ao buscar repositórios do GitHub:', error.message);
    res.status(500).json({ message: 'Falha ao buscar repositórios do GitHub.' });
  }
});

app.listen(port, () => {
  console.log(`Backend rodando em http://localhost:${port}`);
});

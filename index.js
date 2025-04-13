const express = require('express');
const router = express.Router();

let cadastros = [];

// Criar novo cadastro
router.post('/', (req, res) => {
  const { nome, email, idade } = req.body;

  if (!nome || !email || typeof idade !== 'number') {
    return res.status(400).json({ erro: 'Dados inválidos!' });
  }

  const novoCadastro = {
    id: cadastros.length + 1,
    nome,
    email,
    idade
  };

  cadastros.push(novoCadastro);
  res.status(201).json({ mensagem: 'Cadastro realizado com sucesso!', cadastro: novoCadastro });
});

// Listar todos os cadastros
router.get('/', (req, res) => {
  res.json(cadastros);
});

// Buscar cadastro por ID
router.get('/:id', (req, res) => {
  const cadastro = cadastros.find(c => c.id == req.params.id);

  if (!cadastro) {
    return res.status(404).json({ erro: 'Cadastro não encontrado.' });
  }

  res.json(cadastro);
});

module.exports = router;

const express = require('express');
const router = express.Router();

let cadastros = [];

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

router.get('/', (req, res) => {
  res.json(cadastros);
});

module.exports = router;

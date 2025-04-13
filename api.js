const express = require('express');
const router = express.Router();

let cadastros = [];

router.post('/', (req, res) => {
  const { nome, email, idade } = req.body;

  const novoCadastro = {
    id: cadastros.length + 1,
    nome,
    email,
    idade
  };

  cadastros.push(novoCadastro);

});

router.get('/', (req, res) => {
  res.json(cadastros);
});

module.exports = router;

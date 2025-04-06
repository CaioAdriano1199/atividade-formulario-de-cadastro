const express = require('express');
const cors = require('cors');
const app = express();
const rotas = require('./api');

app.use(cors());
app.use(express.json());

app.use('/cadastros', rotas);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
